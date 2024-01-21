# PetModel-Backend API

Este é um projeto de API desenvolvido como parte do desafio da NectarLabs para o controle de adoção de pets por uma ONG.

## Sobre o Projeto

O PetModel API é uma aplicação Node.js utilizando o framework Express para criar uma API que gerencia informações sobre pets disponíveis para adoção. A API permite listar pets, obter detalhes específicos, cadastrar novos pets, marcar um pet como adotado e remover um pet do sistema. Além disso, incorpora autenticação via JSON Web Tokens (JWT) para proteger certas rotas e garantir a segurança do sistema.

## Instalação

Certifique-se de ter o Node.js e o MySQL instalados em seu sistema.

1. Clone o repositório:

   ```bash
   git clone https://github.com/opZywl/PetModel-Backend.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd PetModel-Backend
   ```

3. Instale as dependências:

   ```bash
   npm install express dotenv mysql2 jsonwebtoken
   ```

4. Configure o banco de dados MySQL:
   - Execute o script `petTable.sql` para criar a tabela.
   - Execute o script `insertPets.sql` para inserir dados iniciais.

5. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=sua-senha-do-banco
   DB_NAME=petmodelbd
   SECRET_KEY=sua-chave-secreta-jwt
   ```

6. Inicie o servidor:

   ```bash
   npm start
   ```

## Endpoints

- **Listar Pets:** `GET /pets`
  Retorna a lista de todos os pets disponíveis para adoção.

- **Detalhes do Pet:** `GET /pets/:id`
  Retorna os detalhes de um pet específico com base no ID.

- **Adotar Pet:** `PUT /pets/adopt/:id`
  Atualiza o status do pet para indicar que foi adotado.

- **Cadastrar Novo Pet:** `POST /pets`
  Permite adicionar um novo pet à lista.

- **Remover Pet:** `DELETE /pets/:id`
  Remove um pet do sistema com base no ID.

- **Autenticação:** `POST /auth/login`
  Permite autenticar-se e obter um token JWT para acessar rotas protegidas.

## Termos de Segurança

Este projeto implementa práticas de segurança, incluindo autenticação com JWT, para proteger dados sensíveis e garantir a integridade da aplicação. Recomenda-se manter as chaves secretas e senhas em ambientes seguros e não compartilhá-las publicamente.

## Motivo

Este projeto foi desenvolvido como parte do Desafio da NectarLabs para o controle de adoção de pets por uma ONG.