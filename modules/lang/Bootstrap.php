<?php

Yii::$app->getUrlManager()->addRules(
    [
        [
            'class' => 'yii\rest\UrlRule',
            'controller' => ['lang' => 'lang/api'],
            'prefix' => 'api'
        ]
    ]
);