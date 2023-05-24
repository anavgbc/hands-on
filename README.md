# Hands on! 🎙️

Aplicação integrada a API do Spotify que permite ao usuário autenticado buscar por seus albuns favoritos, visualizar informações detalhadas sobre cada álbum, além de ter a opção de redirecionamento para o aplicativo Spotify instalado em seus dispositivos.

## 📜 Pré-requisitos e tecnologias

Antes de começar, verifique se você tem os seguintes pré-requisitos instalados no seu sistema:

- VueJS
- Conta no Spotify: Se você ainda não tiver uma conta no Spotify, crie uma em https://www.spotify.com.
- [Node.js:](https://nodejs.org/en) Baixe e instale o Node.js de acordo com a sua plataforma.

## 🎸 Funcionalidades

- Buscar álbuns por um termo qualquer
- Descobrir novos álbuns aleatórios
- Acessar faixa dos albuns

## 📝 Passo 1: Obter as Credenciais do Spotify

Para que a aplicação funcione corretamente, você precisa obter as credenciais do Spotify. Siga os passos abaixo para conseguir o ID do Cliente e o Segredo do Cliente:

- Acesse a [Dashboard de Desenvolvedores](https://developer.spotify.com/dashboard) do Spotify e faça login com sua conta do Spotify.
- Crie um novo aplicativo clicando no botão "Create an App".
  Preencha as informações solicitadas, como nome do aplicativo e descrição. O campo de Redirect URIs deve ser preenchido de forma correta.

  Exemplo:

  - App Name: My App
  - App Description: This is my first Spotify app
  - Redirect URIs: http://localhost:8080/home

- Após a criação do aplicativo, você verá o ID do Cliente e o Segredo do Cliente na página do aplicativo. Anote essas informações, pois você precisará delas mais tarde.

## 📁 Passo 2: Clonar o Repositório

Abra o terminal ou prompt de comando, navegue até o diretório desejado e execute o seguinte comando:

```
git clone git@github.com:seu-usuario/hands-on.git
```

Substitua seu-usuario pelo seu nome de usuário do GitHub.

## ⚙️ Passo 3: Configurar as Variáveis

A aplicação usa variáveis para armazenar as credenciais do Spotify e possibilitar a autenticação. Siga os passos abaixo para configurá-las.

- No diretório raiz do projeto, acesse o arquivo cahamado 'data.js'.
- Complete as lacunas com seus dados.

```
  VUE_APP_CLIENTID: "seu-id-do-cliente",
  VUE_APP_CLIENT_SECRET: "seu-segredo-do-cliente"

```

## 💾 Passo 4: Instalar as Dependências

Certifique-se de estar no diretório raiz do projeto e execute o seguinte comando:

```
  npm install
```

Isso instalará todas as dependências listadas no arquivo package.json.

## 💿 Passo 5: Executar a Aplicação

Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar a aplicação:

```
npm run serve
```

Caso tudo tenha sido feito corretamente, isso iniciará a aplicação em http://localhost:8080.
