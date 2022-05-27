<?php
$num = (int)$_GET['num'];
print("O número digitado é " .$num);
echo "<br/>";

if($num > 10){
    echo "O número digitado é maior que 10";
}else if($num == 10){
    echo "O número digitado é igual a 10";
}else{
    echo "O número digitado é menor a 10";
}

?>