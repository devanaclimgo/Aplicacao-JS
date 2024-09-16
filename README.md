## Aplicação de Gerenciamento de Metas

### Descrição
Este é um aplicativo de linha de comando simples, desenvolvido em Node.js, que permite aos usuários criar, gerenciar e acompanhar suas metas. Ele utiliza o módulo @inquirer/prompts para criar uma interface interativa e o módulo fs para salvar e carregar as metas em um arquivo JSON.
O código foi feito na semana <nlw> pocket - Javascript da @Rocketseat na trilha iniciante.

### Funcionalidades
* Cadastro de metas: Permite adicionar novas metas à lista.
* Listagem de metas: Exibe todas as metas cadastradas, permitindo marcar as concluídas.
* Visualização de metas:
    * Metas realizadas: Mostra as metas que já foram concluídas.
    * Metas abertas: Mostra as metas que ainda estão em andamento.
* Deleção de metas: Permite remover metas da lista.
* Persistência de dados: As metas são salvas em um arquivo JSON para que possam ser acessadas em futuras execuções do aplicativo.

### Como Usar
#### Instalação:
```bash
npm install
```
#### Execução
```bash
node app.js
```
#### Interação
- Siga as instruções na tela para navegar pelas opções e gerenciar suas metas.

### Estrutura do Projeto
* app.js: Arquivo principal da aplicação, contendo toda a lógica do programa.
* metas.json: Arquivo onde as metas são armazenadas.

### Tecnologias Utilizadas
* Node.js: Plataforma para execução do JavaScript fora do navegador.
* @inquirer/prompts: Módulo para criar interfaces de linha de comando interativas.
* fs: Módulo do Node.js para interagir com o sistema de arquivos.

### Contribuições
Contribuições são bem-vindas! Para contribuir, por favor, fork este repositório, faça as suas alterações e abra um pull request.
