<?php 

    function router($action){
        $Action = array();
        $Action['default'] = 'ctrlHome.php';
        $Action['home'] = 'ctrlHome.php';
        $Action ['game'] = 'ctrlGame.php';
        $Action['deletePlayer'] = 'ctrlDeletePlayer.php';
        $Action['healthPlayer'] = 'ctrlHealthPlayer.php';
        
        $actions = explode('/',$action);

        if(array_key_exists($actions[0], $Action)){//check if does action exist
            return $Action[$actions[0]];
        }else{//if action doesn't exist redirect to default
            return $Action['default'];
        }

    }