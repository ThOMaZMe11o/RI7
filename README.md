# Calculadora Polimórfica

Uma calculadora em TypeScript que demonstra o conceito de **polimorfismo com interfaces** da programação orientada a objetos.

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm (incluído com o Node.js)

## 🚀 Como inicializar o projeto

### 1. Instalar as dependências

```bash
npm install
```

### 2. Compilar o TypeScript

```bash
npx tsc
```

### 3. Executar a calculadora

```bash
node out/main.js
```

## 💻 Como usar

Após iniciar o programa, digite os números e a operação desejada separados por espaço:

```
<número1> <número2> <operação>
```

### Operações disponíveis:
- `Somar` - Soma dois números
- `Subtrair` - Subtrai o segundo número do primeiro
- `Multiplicar` - Multiplica dois números
- `Sair` - Encerra o programa

### Exemplos:

```
10 5 Somar        → Resultado: 15
20 8 Subtrair     → Resultado: 12
3 4 Multiplicar   → Resultado: 12
```

## 📁 Estrutura do projeto

```
src/
├── calculo.ts       # Interface Calculo
├── soma.ts          # Classe Soma (implementa Calculo)
├── subtracao.ts     # Classe Subtracao (implementa Calculo)
├── multiplicacao.ts # Classe Multiplicacao (implementa Calculo)
├── mensagens.ts     # Classe para exibir mensagens
└── main.ts          # Ponto de entrada da aplicação
```

## 🎯 Conceito: Polimorfismo com Interfaces

Este projeto demonstra o polimorfismo através de uma interface `Calculo` que define o contrato:

```typescript
interface Calculo {
    calcular(numero1: number, numero2: number): number;
}
```

Cada operação (Soma, Subtração, Multiplicação) implementa essa interface de forma única, permitindo que diferentes comportamentos sejam executados através do mesmo contrato.
