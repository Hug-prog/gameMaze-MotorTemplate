<?php
    require_once "$racine/Model/actionPlayerbd.php";

    if(isset($_POST)){
       foreach($_POST as $key => $value){    
        updateHealth($_POST['id'],$_POST['health']);
       }
    }
