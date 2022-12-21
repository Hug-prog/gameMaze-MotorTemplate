<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script  src='./js/lab_sys-back.js' ></script>
    <link rel="stylesheet" href="./style/game.css">
    <title>Document</title>
</head>
<body>
    <div class='game'>
        <div class='stop'>
           <a href='./?action=home' type='submit' class='btnStopGame'>stop</a>
        </div>
        <div class='infoPlayer'>
            <?php  
                require_once "$racine/Model/playersbd.php";

                $getName = $_GET['action'];
                $playerName = explode('=', $getName);
                
                $player = getPlayer($playerName[1]);    
                //var_dump($player);
                $infoPlayer = [];
                foreach ($player as $key => $value) {
                    $infoPlayer[$key] = $value;
            ?>
                <p class='<?= $key ?>'><?= $key .'  :  '. $value ?></p>
            <?php }?>
        
        </div>

            
        <?php 
            //require_once "$racine/Model/actionPlayerbd.php";
            //updateAttack(1,3)
        ?>

        <!-- view maze -->
        <h1>Labyrinthe</h1>
        <table>
            <tbody id="monLabyrinthe"></tbody>
        </table>
    </div>

    <script>
        window.PLAYER = <?php echo json_encode($infoPlayer); ?>;
        window.addEventListener("onload", main(window.PLAYER));
    </script>

</body>
</html>