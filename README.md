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
