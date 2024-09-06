# Nunes Sports - CRUD de Produtos

Este projeto implementa um CRUD completo de produtos usando **Spring Boot + PostgreSQL** no backend e **React + Vite** no frontend. O projeto está dividido em duas pastas:

- `backend/`: Contém a API construída com **Java**, **Spring Boot**, e **PostgreSQL**.
- `frontend/`: Contém a interface de usuário construída com **React** e **Vite**.

![Exemplo de Imagem](https://github.com/negreiroleo/crud-java-react/blob/main/exemplo.png)

## Pré-requisitos

Certifique-se de ter instalado na sua máquina:

- **Java 17** ou superior
- **Node.js** (versão 16 ou superior)
- **PostgreSQL** (ou um banco de dados PostgreSQL configurado)
- **Maven** (para rodar o backend)
- **Git** (para clonar o repositório)

## Como rodar o projeto

### 1. Clone o repositório

Clone este repositório em sua máquina local:

```bash
git clone https://github.com/negreiroleo/crud-java-react.git
```

### 2. Configuração do Backend
Navegue até a pasta do backend:

```bash
cd backend/NunesSports/NunesSports
```

#### 2.1 Configuração do Banco de Dados
Você precisará configurar o banco de dados PostgreSQL.

Crie um banco de dados no PostgreSQL com o nome "product".

No arquivo src/main/resources/application.properties, verifique se as credenciais estão corretas para o banco de dados local:

```bash
spring.datasource.url=jdbc:postgresql://localhost:5432/product
spring.datasource.username=postgres
spring.datasource.password=sua_senha
spring.jpa.hibernate.ddl-auto=update
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
```
- **spring.datasource.username:** Seu usuário do PostgreSQL.
- **spring.datasource.password:** Sua senha do PostgreSQL.

#### 2.2 Rodando o Backend
Para rodar o backend, abra um projeto na IDE de preferência e dê "Start" em NunesSportsApplication.java.
O backend estará disponível em: http://localhost:8080.

### 3. Configuração do Frontend
Navegue até a pasta do frontend:

```bash
cd frontend/NunesSports
```

#### 3.1 Instalando Dependências
Instale as dependências do frontend com npm ou yarn:

```bash
# Usando npm
npm install

# Usando yarn (opcional)
yarn install
```

#### 3.2 Rodando o Frontend
Após a instalação das dependências, você pode rodar o projeto com o seguinte comando:

```bash
# Usando npm
npm run dev

# Usando yarn (opcional)
yarn dev
```
O frontend estará disponível em: http://localhost:5173.

### 4. Acessando a Aplicação
- Certifique-se de que tanto o backend quanto o frontend estejam rodando.
- Abra o navegador e acesse http://localhost:5173 para ver a interface do projeto.

### Endpoints da API
Aqui estão os principais endpoints da API disponíveis no backend:

- **GET** /product: Lista todos os produtos.
- **POST** /product: Cria um novo produto.
- **PUT** /product/{id}: Atualiza um produto existente.
- **DELETE** /product/{id}: Deleta um produto.

### Exemplo de Requisição POST (Criar Produto)

```bash
POST /product
Content-Type: application/json

{
  "name": "Camisa Adidas",
  "description": "Camisa confortável para esportes",
  "price": 220,
  "image": "url-da-imagem"
}
```
### Tecnologias Utilizadas
- **Frontend:** React, Vite, React Query
- **Backend:** Java, Spring Boot, PostgreSQL
- **Build Tools:** Maven, Node.js, npm
