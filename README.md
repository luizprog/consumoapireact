#iniciando o server fake json
json-server [nome_do_arquivo].json #db.json ou o nome que voce preferir para o .json
ou
json-server db.json -H [ip_do_server]


#iniciando app
expo start #to start the android app pressionar a nas opcoes

#iniciar emulador
./emulator -avd [nome_do_emulador] #[Nexus_5X_API_28]



#If you are sure the module exists, try these steps:
# 1. Clear watchman watches: watchman watch-del-all
# 2. Delete node_modules and run yarn install
# 3. Reset Metro's cache: yarn start --reset-cache
#4. Remove the cache: rm -rf /tmp/metro-*


#Requisitos
Olá, aluno(a)!

Com o React Native podemos realizar requisições HTTP e assim compartilhar dados entre os usuários de nossa aplicação. Durante a unidade 4 criamos uma API fake utilizando o json-server e conectamos uma aplicação para realizar funções básicas de CRUD, utilizando a biblioteca axios e os métodos HTTP. Nessa atividade você deverá criar uma API, semelhante a criada em aula, simulando um recurso mais completo (por exemplo, o cadastro de um produto: código, descrição, preço, categoria e imagem) e desenvolver uma aplicação em React Native, conectando-a na API desenvolvida, que, obrigatoriamente executará função com os métodos HTTP (GET, POST, PATCH e DELETE). Você deverá enviar o projeto (todos os arquivos, exceto o diretório node_modules) para avaliação.


