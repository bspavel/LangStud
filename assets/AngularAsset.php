<?php
namespace frontend\assets;

use yii\web\AssetBundle;
use yii\web\View;

class AngularAsset extends AssetBundle
{
    public $sourcePath = '@bower';
    public $js = [
        'angular/angular.js',
        //'angular-animate/angular-animate.min.js',
        'bootstrap/ui-bootstrap.min.js',
        'bootstrap/ui-bootstrap-tpls.min.js'
    ];

    public $jsOptions = [
        'position' => View::POS_END,
    ];
}