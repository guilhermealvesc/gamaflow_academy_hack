# GamaFlow

Protótipo de sistema de datastream usando o algoritmo top-k

## Arquivos de entrada

    - ./src/csv/completo.csv: arquivo de entrada contendo os dados necessários para popular a base de dados
    - Outra opção
      - carregar um arquivo em ./raw_data_analiser/Data.xlsx - Data.csv com a base fornecida pela Ambev
      - Rodar o script ./raw_data_analiser/analise_estatica.R para gerar o arquivo ./src/csv/completo.csv

## Subir a API

```cd src```  
```npm install```  
```npm start```  

## Visualizador

- Com o servidor rodando, acesse http://localhost:3000/  
- Clique nos botões para gerar compras falsas e testar o algoritmo
- Para ver todo o histórico dos top-k mais relevantes ao longo da história do algoritmo acesse a rota http://localhost:3000/historic