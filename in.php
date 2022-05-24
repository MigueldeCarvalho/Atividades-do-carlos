<?php
$servername = "localhost:3307";
$username = "root";
$password = "";
$dbname = "miguel1";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM usuario";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["usu_id"]. " - Name: " . $row["usu_nome"]. " " . $row["usu_cpf"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>