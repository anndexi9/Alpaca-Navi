<?php
    // A simple PHP script demonstrating how to connect to MySQL.
    // Press the 'Run' button on the top to start the web server,
    // then click the URL that is emitted to the Output tab of the console.
/*
   $servername = getenv('IP');
    $username = getenv('C9_USER');
    $password = "";
    $database = "c9";
    $dbport = 3306;

    // Create connection
    $db = new mysqli($servername, $username, $password, $database, $dbport);

    // Check connection
    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    } 
    echo "Connected successfully (".$db->host_info.")";
    
    */
    
    $host = "127.0.0.1";
    $user = "anndexi9";
    $pass = "";
    $db = "alpaca_navi";        
    $port = 3306;

    // Create connection
    $link = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
    
    

    //And now to perform a simple query to make sure it's working
    $query = "SELECT * FROM mem_thread";
    $result = mysqli_query($link, $query);

    while ($row = mysqli_fetch_assoc($result)) {
        echo $row['thread_id']."<br>";
}

?>