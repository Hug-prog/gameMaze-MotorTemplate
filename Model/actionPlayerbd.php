<?php 

    //connexion à la bdd
    require_once("cnx.php");

    // update attack points
    function updateAttack($id,$nbPoints){
        try {
            
            $cnx = connexionPDO();
            $req = $cnx->prepare("UPDATE players SET  attack=$nbPoints WHERE id=$id ;");
            $req->execute();

        } catch (PDOException $e) {
             print "Erreur !: " . $e->getMessage();
            die();
        }
    }
    

    // update health points
    function updateHealth($id,$nbPoints){
        try {
            
            $cnx = connexionPDO();
            $req = $cnx->prepare("UPDATE players SET  health=$nbPoints WHERE id=$id ;");
            $req->execute();

        } catch (PDOException $e) {
             print "Erreur !: " . $e->getMessage();
            die();
        }
    }

    // update mode
    function updateMode($id,$mode){
        try {
            
            $cnx = connexionPDO();
            $req = $cnx->prepare("UPDATE players SET  mode=$mode WHERE id=$id ;");
            $req->execute();

        } catch (PDOException $e) {
             print "Erreur !: " . $e->getMessage();
            die();
        }
    }