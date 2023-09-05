# Testes na API do Game Of Thrones com Playwright

## Sobre o projeto

Essa é uma aplicação de testes automatizados em uma API com informações sobre a série Game of Thrones. Os testes foram aplicados em todos os endpoints da API, cujos resultados são disponibilizados em relatório gerado pelo Allure. 

Além disso, foi desenvolvida uma pipeline no Github Actions para que os testes sejam executados e o relatórios sejam gerados a cada push ou pull request na branch main do repositório.

## Link da API
https://anapioficeandfire.com/

## Tecnologias utilizadas

- Playwright
- Allure Report
- Github Actions

## Endpoints com testes automatizados

- [GET] Listar todos os livros (/books)
- [GET] Listar um livro específico (/books/id)
- [GET] Listar todos os personagens (/characters)
- [GET] Listar um personagem específico (/characters/id)
- [GET] Listar todas as casas (/houses)
- [GET] Listar uma casa específica (/houses/id)

## Relatório gerado
![image](https://github.com/pauloliveiram/got-playwright/assets/39312072/a49a0222-d05d-44e1-8b1f-a5ee909ec807)

## Como executar os testes

### Pré-requisitos

- Node instalado na máquina
- Java 8 instalado na máquina (Necessário para executar o binário allure)

```bash

# Clonar repositório
git clone https://github.com/pauloliveiram/got-playwright.git

# Entrar na pasta do projeto
cd got-playwright

# Instalar dependências especificadas no arquivo package.json 
npm install
	
# Executar os testes e gerar arquivos na pasta allure-results
npm run tests
					
# Gerar os relatórios a partir dos arquivos da pasta allure-results e abrir o browser com os relatórios
npm run allure-report
								
# Caso queira executar os testes e gerar os relatórios novamente, antes é necessário limpar a pasta allure-results com o seguinte comando:
npm run clean:folders					
```

 ### ESLint e Prettier
No projeto foram utilizadas as ferramentas ESLint e Prettier para garantir uma melhor qualidade do código desenvolvido. 
- **ESLint:** é responsável por analisar o código e identificar problemas de acordo com regras pré-estabelecidas
- **Prettier:** é responsável por formatar o código de acordo com regras pré-estabelecidas

```bash

# Executar o ESLint
npx eslint . --ext .ts

# Executar o Prettier
npx prettier . --write
```

# Autor
Paulo Oliveira

