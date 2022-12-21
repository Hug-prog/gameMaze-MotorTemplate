<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style/home.css">
    <title>Document</title>
</head>
<body>
    <?php 
        include_once "./Model/playersbd.php";

        // get list of players
        $list = getAllPlayer();

        if(isset($_POST)){
            
            if(!empty($_POST)){
                // check if name exist in bdd
                for ($i = 0; $i < count($list); $i++){
                    
                    // if name exist
                    if($list[$i]['name'] ==$_POST['name']){
                        
                        echo "<h1>Hello ".$_POST['name']." click play !</h1>";
                        
                        // redirect to View game
                        echo "<a href='./?action=game/name=".$_POST['name']."'>play</a>";
                    }
                }

                // create player
                addPlayer($_POST['name']);
                    
                echo "<h1>Hello ".$_POST['name']." click play !</h1>";
                    
                // redirect to View game
                echo "<a href='./?action=game/name=".$_POST['name']."'>play </a>";

            }
        }

    ?>

    <div class='home'>
        
        <div class='addPlayer'>
            <h1>Add Player</h1>
            <form method="post">
                <input name='name' placeholder='player name' />
                <button type='submit'>ADD</button>
            </form>
        </div>

        <div class='listPlayers'>
            <h1>List of last player</h1>

            <form method="post" action='./?action=deletePlayer'>
                <ul>
                    <?php

                        for ($i = 0; $i < count($list); $i++){
                    ?>
                    <li>
                        <a href='./?action=game/name=<?= $list[$i]['name'] ?>'><?= $list[$i]['name'] ?></a>
                        <button type='submit' name='delete' value="<?= $list[$i]['name'] ?>">delete</button>
                    </li>
                    <?php }?>
                </ul>
            </form>

        </div>
    </div>
            

</body>
</html>