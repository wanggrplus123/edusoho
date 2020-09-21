<?php

namespace Tests\Unit\InformationCollect\Service;

use Biz\BaseTestCase;

class EventServiceTest extends BaseTestCase
{
    public function testGetEventByActionAndLocation()
    {
        $mockEvent = $this->mockEvent();

        $event = $this->getInformationCollectEventService()->getEventByActionAndLocation('buy_after', [
            'targetType' => 'course',
            'targetId' => '1',
        ]);

        $this->assertEquals($mockEvent['id'], $event['id']);
    }

    protected function mockEvent()
    {
        $event = $this->getInformationCollectEventDao()->create([
            'id' => '1',
            'title' => '测试表单',
            'action' => 'buy_after',
            'formTitle' => '测试表单',
            'status' => 'open',
            'allowSkip' => 1,
        ]);

        $this->getInformationCollectLocationDao()->create([
            'eventId' => '1',
            'action' => 'buy_after',
            'targetType' => 'course',
            'targetId' => '1',
        ]);

        return $event;
    }

    protected function getInformationCollectEventService()
    {
        return $this->createService('InformationCollect:EventService');
    }

    protected function getInformationCollectEventDao()
    {
        return $this->createDao('InformationCollect:EventDao');
    }

    protected function getInformationCollectLocationDao()
    {
        return $this->createDao('InformationCollect:LocationDao');
    }
}
