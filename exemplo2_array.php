<?php
$vet[0] = 'Brasil';
$vet[1] = 'Chile';
$vet[2] = 'Bolívia';
$vet[3] = 'Venezuela';
$vet[4] = 'Paraguai';

print($vet[0]);
print("<br/>");

print_r($vet);
print("<br/>");

for($i=0;$i<5;$i++){
    print("O país da posição " .($i+1)." = ".$vet[$i]."<br/>");
}

$vet2 = Array('Joinville','Blumenau','Jaragua');

print_r($vet2);
print("<br/>");

$estados = Array('RS'=>'Rio Grande do Sul', 'SC'=>'Santa Catarina', 'PR'=>'Paraná', 'SP'=>'São Paulo');

print_r($estados);
print("<br/>");

foreach($estados as $chave=>$valor){
    print($chave." é a sigla de ".$valor."<br/>");

}

asort($estados);
print("<br/>");
print("<br/>");
print_r($estados);

print("<br/>");
print("<br/>");

sort($vet);

print_r($vet);

print("<br/>");
print("<br/>");
print("<br/>");
print("<br/>");



?>