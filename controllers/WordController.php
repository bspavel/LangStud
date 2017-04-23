<?php
namespace app\controllers;

use yii\rest\ActiveController;
use yii\helpers\ArrayHelper;
use yii\filters\Cors;

class WordController extends ActiveController
{
    public $modelClass = 'app\models\Words';

    public function behaviors()
    {
        return
            ArrayHelper::merge(parent::behaviors(), [
                'corsFilter' => [
                    'class' => Cors::className(),
                ],
                'contentNegotiator' => [
                    'class' => \yii\filters\ContentNegotiator::className(),
                    'formats' => [
                        'application/json' => \yii\web\Response::FORMAT_JSON,
                    ],
                ],
                'access' => [
                    'class' => \yii\filters\AccessControl::className(),
                    'only' => ['create', 'update', 'delete'],
                    'rules' => [
                        [
                            'actions' => ['create', 'update', 'delete'],
                            'allow' => true,
                            'roles' => ['@'],
                        ],
                    ],
                ],

            ]);
    }
}