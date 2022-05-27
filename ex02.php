<?php

$num = (int)$_POST['num'];
echo "O valor digitado é = $num <br/>";
$cont = 1;
echo "<hr/>";
echo "estrutura DO - WHILE";
echo "<br/>";

do{
   echo "o valor atual é = $cont <br/>";
   $cont++;
}while($num>=$cont)


?>