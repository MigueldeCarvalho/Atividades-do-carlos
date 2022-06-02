<?php
// var_dump($_POST);

include_once('conect03.php');

$id = '';
$nome = '';
$sobrenome = '';
$idade = '';
$gravar = '';
$atualizar = '';
$deletar = '';
$listar = '';

if(!empty($_POST['id'])){
    $id = $_POST['id'];
    // echo "Código = $id <br/>";
}

if(!empty($_POST['nome'])){
    $nome = $_POST['nome'];
    // echo "Nome = $nome <br/>";
}

if(!empty($_POST['sobrenome'])){
    $sobrenome = $_POST['sobrenome'];
    // echo "Sobrenome = $sobrenome <br/>";
}

if(!empty($_POST['idade'])){
    $idade = $_POST['idade'];
    // echo "Idade = $idade <br/>";
}

if(!empty($_POST['gravar'])){
    $gravar = $_POST['gravar'];
    // echo "Botão Gravar = $gravar <br/>";
}

if(!empty($_POST['atualizar'])){
    $atualizar = $_POST['atualizar'];
    // echo "Botão Atualizar = $atualizar <br/>";
}

if(!empty($_POST['deletar'])){
    $deletar = $_POST['deletar'];
    // echo "Botão Deletar = $deletar <br/>";
}

if(!empty($_POST['listar'])){
    $listar = $_POST['listar'];
    // echo "Botão Listar = $listar <br/>";
}

if($gravar == 'Gravar' && $id != ''){
    $res_inserir = "INSERT INTO user2(id,nome,sobrenome,idade) VALUES ('$id','$nome','$sobrenome','$idade')";
    $resposta_inserir = mysqli_query($conn,$res_inserir);
    echo "dados gravados";
}else if($atualizar == 'Atualizar' && $id != ''){
    $res_atualizar = "UPDATE user2 SET nome='$nome', sobrenome='$sobrenome', idade='$idade' WHERE id='$id' ";
    $resposta_atualizar = mysqli_query($conn,$res_atualizar);
    echo "dados atualizados";
}else if($deletar == 'Deletar' && $id != ''){
    $res_deletar = "DELETE FROM user2 WHERE id='$id' ";
    $resposta_deletar = mysqli_query($conn,$res_deletar);
    echo "dados excluidos";
}else if($listar == 'Listar'){
    $res_listar = "SELECT * FROM user2";
    $resposta_listar = mysqli_query($conn,$res_listar);
    while($row_tabela = mysqli_fetch_assoc($resposta_listar)){
        echo "Código = " . $row_tabela['id'] . "<br/>";
        echo "Código = " . $row_tabela['nome'] . "<br/>";
        echo "Código = " . $row_tabela['sobrenome'] . "<br/>";
        echo "Código = " . $row_tabela['idade'] . "<br/>";
        echo "<hr/>";
    }
}else{
    echo "Verifique se os dados foram incluidos corretamente";
    echo "O campo código é de preenchimento obrigatório";
}


?>