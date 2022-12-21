<?php
    require_once "$racine/Model/playersbd.php";

    if(isset($_POST)){
        //var_dump($_POST['delete']);
        
        // get player 
        $player = getPlayer($_POST['delete']);
        
        // delete player
        deletePlayer($player['id']);  
    }

    // redirect to home page
    header("Location: ./?action=home");