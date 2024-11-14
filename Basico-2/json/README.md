# JSON (JavaScript Object Notation)

É um formato de dados leve e fácil de ler, amplamente usado para trocar informações entre sistemas e também para armazenar dados. Sua estrutura é semelhante a objetos em linguagens de programação, especialmente no JavaScript, mas pode ser lido e manipulado por quase qualquer linguagem, como Python, Java, PHP, entre outras.

Na vida prática o JSON é muitas vezes retornado por um banco de dados e temos que extrair as informações dentro dele e consumir

## Sintax básica:

Dentro de um JSON, pode ter um array, objeto, string, number, quase qualquer tipo de dado.

```
{
  "nome": "Ana",
  "idade": 25,
  "cidade": "São Paulo"
}

```

### Exemplo de uma sintax mais completa

```
{
  "nome": "Ana",
  "idade": 25,
  "cidade": "São Paulo",
  "casado": false,
  "hobbies": ["leitura", "viagem", "esportes"],
  "endereco": {
    "rua": "Av. Paulista",
    "numero": 1000,
    "cep": "01310-100"
  }
}

```

## Como o JSON é usado na prática?

O JSON é muito utilizado em APIs (Interfaces de Programação de Aplicações) para enviar dados entre um cliente (por exemplo, um site) e um servidor (a máquina que processa os dados). Suponha que um site precise obter as informações do perfil de um usuário; o servidor pode enviar os dados no formato JSON, que o site pode ler e exibir.