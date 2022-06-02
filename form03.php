<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
</head>
<body>
    <h1>Cadastro do Usuário</h1><br/>

<form action="proc03.php" method="post">

    <label for="id">Código:</label>
    <input type="number" name="id" placeholder="Digite o Código"><br/><br/>
    <label for="nome">Nome:</label>
    <input type="text" name="nome" placeholder="Digite o Nome"><br/><br/>
    <label for="sobrenome">Sobrenome:</label>
    <input type="text" name="sobrenome" placeholder="Digite o Sobrenome"><br/><br/>
    <label for="idade">Idade:</label>
    <input type="number" name="idade" placeholder="Digite a Idade"><br/><br/>

    <input type="submit" name="gravar" value="Gravar">
    <input type="submit" name="atualizar" value="Atualizar">
    <input type="submit" name="deletar" value="Deletar">
    <input type="submit" name="listar" value="Listar">
</form>


</body>
</html>