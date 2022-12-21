<?php
    //connexion à la bdd
    require_once("cnx.php");

    
    // get all players
    function getAllPlayer() {
        $resultat = array();
        try {
            $cnx = connexionPDO();
            $req = $cnx->prepare("select * from players");
            $req->execute();
            $ligne = $req->fetch(PDO::FETCH_ASSOC);
            while ($ligne) {
                $resultat[] = $ligne;
                $ligne = $req->fetch(PDO::FETCH_ASSOC);
            }
        }
        catch (PDOException $e){
            print "Erreur !: " . $e->getMessage();
            die();
        }
        return $resultat;
    }

    // get plyer
    function getPlayer($player){
        $resultat = array();
        try {
            $cnx = connexionPDO();
            $req = $cnx->prepare("select * from players where name like :player");
            $req->bindValue(':player', "%".$player."%", PDO::PARAM_STR);
            $req->execute();

            $resultat = $req->fetch(PDO::FETCH_ASSOC);
        }
        catch (PDOException $e) {
            print "Erreur !: " . $e->getMessage();
            die();
        }
        return $resultat;
    }

    // create player
    function addPlayer($player) {
        try { 
        
            $cnx = connexionPDO();
            $req = $cnx->prepare("INSERT INTO `players` (`name`, `health`, `attack`, `mode`) VALUES ('$player', 20, 20, 'normal');");
            $req->execute();
        
        } catch (PDOException $e) {
            print('player exist ');
            die();
        }

    }

    // delete player
    function deletePlayer($playerId) {
         try { 
        
            $cnx = connexionPDO();
            $req = $cnx->prepare("DELETE FROM players WHERE id=$playerId;");
            $req->execute();
        
        } catch (PDOException $e) {
            print "Erreur !: " . $e->getMessage();;
            die();
        }
    }


?>