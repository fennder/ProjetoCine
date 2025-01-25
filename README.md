# MANUAL DE UTILIZAÇÃO DO SISTEMA/SITE
## CAPITULO 1 - Configuração do git no computador
### 1. Consultano documentação do GIT
<p align="justify">
    Realize a busca do termo [Instalar GIT](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git) para Windows.
</p>

<p align="center">
    <a href="https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git" target="_blank">
        <img src="docs/images/Git.png" width="700">
    </a>
</p>

### 2. Verificando a instalação do GIT

```
git --version
```
<p align="center">
    <img src="docs/images/GitVersion.png" width="700">
</p>

### 3. Caso nao esteja instalado

<p align="justify">
    Acesse o item 1 para instalar baixando o git da versão do seu computador [Instalar o GIT - Download](https://git-scm.com/downloads) versão Windows.
    <center><img src="docs/images/Download_GIT.png" width="700"></center>
</p>

### 4. Credenciando GIT no Windows

<p>
    Após realizar a instalação é necessário identificar qual usuário irá ser utilizado para versionar os arquivos.
    Para realizar o creenciamento do GIT no Windows faça:

</p>

    ```
    git config --global user.name "Edir P Santos"

    git config --global user.email fennder@gmail.com
    
    ```

<p>

    Após, identificação de usuário gerar a chave púlica para autorizar a troca de arquivos entre GIT e Sistema Operacional.

</p>

    ```
    ssh-keygen
    ```
<p>
    Gerando a 

</p>

### Comandos administrativos do GIT

```
git status

git add index.html or git add .

git commit -m "Mensagem do desenvolvedor" ex: "Update file README"

git push -u origin master or main
```

## CAPITULO 2 - Criando repositorio no git
### Criando Projeto

<p align="justify">
    Acesse o [GitHub](https://github.com/) no navegador.
</p>
<p align="center">
    <a href="https://github.com/" target="_blank">
        <img src="docs/images/GitHub.png" width="400">
    </a>
</p>

### Processo de clone do projeto

<p align="justify">
    Foi necessario realizar toda a configuração.
</p>