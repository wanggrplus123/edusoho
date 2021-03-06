<?php

namespace Biz\UserLearnStatistics\Dao\Impl;

use Biz\UserLearnStatistics\Dao\DailyStatisticsDao;
use Codeages\Biz\Framework\Dao\AdvancedDaoImpl;
use Codeages\Biz\Framework\Dao\DaoException;

class DailyStatisticsDaoImpl extends AdvancedDaoImpl implements DailyStatisticsDao
{
    protected $table = 'user_learn_statistics_daily';

    public function statisticSearch($conditions, $orderBys)
    {
        $builder = $this->createQueryBuilder($conditions)
            ->select('min(id) as id, userId, sum(joinedClassroomNum) as joinedClassroomNum, sum(joinedCourseSetNum) as joinedCourseSetNum, sum(joinedCourseNum) as joinedCourseNum, sum(exitClassroomNum) as exitClassroomNum, max(createdTime), sum(exitCourseNum) as exitCourseNum, sum(finishedTaskNum) as finishedTaskNum, sum(actualAmount) as actualAmount')
            ->groupBy('userId');

        $declares = $this->declares();
        foreach ($orderBys ?: [] as $order => $sort) {
            $this->checkOrderBy($order, $sort, $declares['orderbys']);
            $builder->addOrderBy($order, $sort);
        }

        $result = $builder->execute()->fetchAll();

        return $result;
    }

    private function checkOrderBy($order, $sort, $allowOrderBys)
    {
        if (!in_array($order, $allowOrderBys, true)) {
            throw new DaoException(sprintf("SQL order by field is only allowed '%s', but you give `{$order}`.", implode(',', $allowOrderBys)));
        }
        if (!in_array(strtoupper($sort), ['ASC', 'DESC'], true)) {
            throw new DaoException("SQL order by direction is only allowed `ASC`, `DESC`, but you give `{$sort}`.");
        }
    }

    public function statisticCount($conditions)
    {
        $builder = $this->createQueryBuilder($conditions)
            ->select('COUNT(*)')
            ->groupBy('userId');

        return (int) $builder->execute()->rowCount();
    }

    public function findByIds($ids)
    {
        if (empty($ids)) {
            return [];
        }

        return $this->findInField('id', $ids);
    }

    public function updateStorageByIds($ids)
    {
        return $this->update(['ids' => $ids], ['isStorage' => 1]);
    }

    public function findUserDailyLearnTimeByDate($conditions)
    {
        $builder = $this->createQueryBuilder($conditions)
            ->select("learnedSeconds as learnedTime ,from_unixtime(recordTime,'%Y-%m-%d') date");

        return $builder->execute()->fetchAll(0) ?: [];
    }

    public function declares()
    {
        return [
            'serializes' => [
            ],
            'orderbys' => [
                'id',
                'createdTime',
                'updatedTime',
                'userId',
                'joinedCourseNum',
                'actualAmount',
            ],
            'timestamps' => ['createdTime', 'updatedTime'],
            'conditions' => [
                'id = :id',
                'id IN ( :ids)',
                'id NOT IN ( :excludeIds )',
                'userId IN ( :userIds )',
                'userId = :userId',
                'createdTime >= :createTime_GE',
                'createdTime <= :createTime_LE',
                'updatedTime >= :updateTime_GE',
                'updatedTime <= :updateTime_LE',
                'isStorage = :isStorage',
                'recordTime < :recordTime_LT',
                'recordTime <= :recordTime_LE',
                'recordTime >= :recordTime_GE',
            ],
        ];
    }
}
