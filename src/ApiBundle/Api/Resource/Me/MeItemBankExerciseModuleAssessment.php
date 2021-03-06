<?php

namespace ApiBundle\Api\Resource\Me;

use ApiBundle\Api\Annotation\ResponseFilter;
use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use AppBundle\Common\ArrayToolkit;

class MeItemBankExerciseModuleAssessment extends AbstractResource
{
    /**
     * @ResponseFilter(class="ApiBundle\Api\Resource\ItemBankExercise\ItemBankExerciseModuleAssessmentFilter", mode="public")
     */
    public function search(ApiRequest $request, $exerciseId, $moduleId)
    {
        $user = $this->getCurrentUser();

        list($offset, $limit) = $this->getOffsetAndLimit($request);
        $conditions = ['exerciseId' => $exerciseId, 'moduleId' => $moduleId];
        $exerciseAssessments = $this->getItemBankAssessmentExerciseService()->search($conditions, [], $offset, $limit);

        $assessments = $this->getAssessmentService()->findAssessmentsByIds(ArrayToolkit::column($exerciseAssessments, 'assessmentId'));
        $answerRecords = $this->getItemBankAssessmentExerciseRecordService()->search(
            ['userId' => $user['id'], 'moduleId' => $moduleId],
            [],
            0,
            PHP_INT_MAX
        );
        $answerRecordGroups = ArrayToolkit::group($answerRecords, 'assessmentId');

        foreach ($exerciseAssessments as $key => &$exerciseAssessment) {
            if (empty($assessments[$exerciseAssessment['assessmentId']])) {
                unset($exerciseAssessments[$key]);
                continue;
            } else {
                $exerciseAssessment['assessment'] = $assessments[$exerciseAssessment['assessmentId']];
            }

            if (!empty($answerRecordGroups[$exerciseAssessment['assessmentId']])) {
                $exerciseAssessment['latestAnswerRecord'] = end($answerRecordGroups[$exerciseAssessment['assessmentId']]);
            }
        }

        $total = $this->getItemBankAssessmentExerciseService()->count($conditions);

        return $this->makePagingObject(array_values($exerciseAssessments), $total, $offset, $limit);
    }

    /**
     * @return \Biz\ItemBankExercise\Service\AssessmentExerciseService
     */
    protected function getItemBankAssessmentExerciseService()
    {
        return $this->service('ItemBankExercise:AssessmentExerciseService');
    }

    /**
     * @return \Codeages\Biz\ItemBank\Assessment\Service\AssessmentService
     */
    protected function getAssessmentService()
    {
        return $this->service('ItemBank:Assessment:AssessmentService');
    }

    /**
     * @return \Biz\ItemBankExercise\Service\AssessmentExerciseRecordService
     */
    protected function getItemBankAssessmentExerciseRecordService()
    {
        return $this->service('ItemBankExercise:AssessmentExerciseRecordService');
    }
}
