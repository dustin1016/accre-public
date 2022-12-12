<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST, GET');
  header('Access-Control-Max-Age: 1000');
  header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

include('config.php');

switch($_POST['action']) {
    case "get":
        getUsers();
        break;
    case "post":
      
        newUser();
        
        break;

        case "reset":
      
            resetPassword();
            
            break;
    default:
     break;
}

function getUsers(){
    $conn = new mysqli(servername, dbuser, dbpw, dbname);
    $users = array();
    $sql = "SELECT * FROM users_table order by username ASC";
    $result = $conn->query($sql);

    if ($result->num_rows > 0){
        while($row = $result->fetch_assoc()) {
            $arr = [
               
                'userid' => $row['userid'],
                'username' => $row['username'],
               
               
                                  
              ];
            array_push($users, $arr);
            
        }
    } 

    echo json_encode(array("users"=>$users));

    $conn->close();
}

function hashPassword($password){
    if ($password === ""){
        return password_hash("pineapple", PASSWORD_DEFAULT);
    } else {
        return password_hash($password, PASSWORD_DEFAULT);
    }
}


function resetPassword(){
  
    $email = $_POST['email'];
    $rowid = getUserRow($email);

    if ($rowid){
        //update the password
        $password = password_hash("pineapple", PASSWORD_DEFAULT);
        $conn = mysqli_connect(servername, dbuser, dbpw, dbname);
        $stmt = mysqli_prepare($conn, "UPDATE `users_table` set `password` = ? where userid = ?");
    mysqli_stmt_bind_param(
        $stmt,
         'si',
           $password,
           $rowid
            );

            $stmt->execute();
            if ($stmt->affected_rows > 0){
                
                echo json_encode(array("result"=>true, "message"=>"your password has been reset to the default password"));
            } else {
                echo json_encode(array("result"=>false, "message"=>"something went wrong please try again later"));
            }
            $stmt->close();
    } else {
        echo json_encode(array("result"=>false, "message"=>"no user exists with the given email"));
    }


}


function getUserRow($email){
    $conn = mysqli_connect(servername, dbuser, dbpw, dbname);
    $stmt = mysqli_prepare($conn, "SELECT `userid` from `users_table` where email = ? order by `userid` desc limit 1");
    mysqli_stmt_bind_param(
        $stmt,
         's',
           $email
            );

    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC); 

    if ($result){
        return $result[0]['userid'];
    } else {
        return false;
    }
    $stmt->close();
}

function newUser(){
    $password = hashPassword(trim($_POST["userpassword"]));
    $usertype = isset($_POST["modFlag"]) ? 1 : 2;
    $username = trim($_POST['username']);
    $email = trim($_POST['useremail']);
    

    $conn = mysqli_connect(servername, dbuser, dbpw, dbname);
    $stmt = mysqli_prepare($conn, "INSERT INTO `users_table`(`username`, `email`, `password`, `usertype`) VALUES (?,?,?,?)");
    mysqli_stmt_bind_param(
      $stmt,
       'sssi',
        $username,
         $email,
         $password,
         $usertype,
          );
    $stmt->execute();

    if ($stmt->affected_rows > 0){
       
        echo json_encode(array("result"=>true, "message"=>"New user has been created!", 'idx'=>$conn->insert_id));
       } else {
        echo json_encode(array("result"=>false, "message"=>"Something went wrong...pls contact developers"));
  
      }
   
      $stmt->close();
}


