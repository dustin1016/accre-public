<?php
#dev credentials
// define("servername", "localhost");
// define("dbname", "accre_db");
// define("dbuser",     "root");
// define("dbpw",     "");

#AWS creds
define("servername", "kaisercoach-instance-1.chmnah5hb3w0.us-east-1.rds.amazonaws.com");
define("dbname", "accre_db");
define("dbuser",     "admin");
define("dbpw",     "Gunblade$1");

date_default_timezone_set('Asia/Manila');
$today = date('Y-m-d H:i:s');

define("today", $today);