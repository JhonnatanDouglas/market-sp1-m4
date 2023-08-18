
# API de Mercado Autônomo

## Descrição

Este projeto implementa uma API REST para o gerenciamento de estoque de um mercado autônomo. A API permite criar, listar, atualizar e deletar produtos, abrangendo duas categorias: comida e limpeza.

## Instruções de Uso

Para começar, siga as instruções abaixo:

1. Clone o repositório do projeto.
2. Importe o arquivo "market_workspace" no aplicativo Insomnia para obter as rotas e regras da API.

## Tecnologias Utilizadas

[![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

## Organização de Arquivos

O projeto segue a seguinte estrutura de arquivos:

- `app.ts`: Arquivo principal da aplicação.
- `interfaces.ts`: Definição das interfaces utilizadas.
- `logics.ts`: Implementação da lógica de negócio.
- `database.ts`: Configuração do banco de dados simulado.
- `middlewares.ts`: Implementação dos middlewares.

## Funcionalidades

### Criar Produto

- **Método**: POST
- **Endpoint**: /products
- **Descrição**: Cria e adiciona um novo produto ao mercado.
- **Exemplo de Requisição**:

```json
{
  "name": "Queijo",
  "price": 10,
  "weight": 30,
  "calories": 300,
  "section": "food"
}
```

- **Exemplo de Resposta**:

```json
{
  "id": 1,
  "name": "Queijo",
  "price": 10,
  "weight": 30,
  "calories": 300,
  "section": "food",
  "expirationDate": "2024-03-06T12:12:32.431Z"
}
```

### Listar Produtos

- **Método**: GET
- **Endpoint**: /products
- **Descrição**: Lista todos os produtos do mercado.
- **Exemplo de Resposta**:

```json
{
  "total": 120,
  "products": [
    {
      "id": 1,
      "name": "Queijo",
      "price": 10,
      "weight": 30,
      "calories": 300,
      "section": "food",
      "expirationDate": "2024-03-06T12:12:32.431Z"
    },
    // Outros produtos...
  ]
}
```

### Detalhes do Produto

- **Método**: GET
- **Endpoint**: /products/:id
- **Descrição**: Lista informações de um produto específico.
- **Exemplo de Resposta**:

```json
{
  "id": 1,
  "name": "Queijo",
  "price": 10,
  "weight": 30,
  "calories": 300,
  "section": "food",
  "expirationDate": "2024-03-06T12:12:32.431Z"
}
```

### Atualizar Produto

- **Método**: PATCH
- **Endpoint**: /products/:id
- **Descrição**: Atualiza os dados de um produto.
- **Exemplo de Requisição**:

```json
{
  "name": "Presunto defumado",
  "price": 100,
  "weight": 30,
  "calories": 300
}
```

- **Exemplo de Resposta**:

```json
{
  "id": 2,
  "name": "Presunto defumado",
  "price": 100,
  "weight": 30,
  "calories": 300,
  "section": "food",
  "expirationDate": "2024-03-06T12:12:32.431Z"
}
```

### Deletar Produto

- **Método**: DELETE
- **Endpoint**: /products/:id
- **Descrição**: Deleta um produto específico.
- **Resposta**: Status code 204 NO CONTENT.

## Middlewares

### Verificação de Nome Existente

Middleware para verificar se o nome do produto já existe no banco.

### Verificação de ID Existente

Middleware para verificar se o ID do produto existe no banco.

## Observações

- A constante "market" em "database.ts" simula o banco de dados.
