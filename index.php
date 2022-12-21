<?php 

    require 'Controller/router.php';

    if(isset($_GET['action'])){
        $action = $_GET['action'];
    }
    else{
        $action = 'default';
    }

    $racine = dirname(__FILE__);
    $file = router($action);
    include "$racine/Controller/$file";