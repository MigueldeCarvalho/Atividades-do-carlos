<?php
include('header.php');
include('nav.php');
echo "Imprimindo texto";
$nome = 'Carlos';
echo "<br/>";
echo"$nome";
echo "<br/>";

$valor = 15.5;
$resposta = true;
$num = 22;

echo "<br/>";
echo "$valor " .gettype($valor) . "<br/>"; 
echo "$resposta " .gettype($resposta) . "<br/>"; 
echo "$num " .gettype($num) . "<br/>"; 
echo "$nome " .gettype($nome) . "<br/>";
echo "$num " .gettype($num) . "<br/>";  

$num = 37.44;
echo "Ponto flutuante: $num <br/>";
$num2 = (int)$num;
echo "Inteiro: $num2";
echo "<br/>";

?>

<h2>PHP Empresa</h2>

<?php
include('footer.php');
?>