# Hash Discount Service 1

Teste Backend da empresa Hash, diretamente relacionado com [HashProducts](https://github.com/polzka90/hashProducts)
## Requerimentos

 1. Ter instalado Docker
 2. Ter instalado PostgreSQL na maquina local
 3. Ter Instalado NodeJs 11
 4. Ter Instalado Git
 5. Ter Instalado Postman


## Pasos

1. Abrir PgAdmin e criar um banco de dados de nome HashDb(se esta não existe ja)
2. Clonar o Repositorio tudo com Git
3. usar o arquivo HashDb.backup dentro do repositorio para restaurar o banco
4. Configurar os acessos para o container conectar em postgreSql mediante la configuração dos siguentes arquivos na pasta de instalação:
	
	4.1. no arquivo postgresql.conf verificar que a seguente linha esta descomentada listen_addresses = '*'
	
	4.2. pg_hba.conf adicionar a siguente linha 
	
	\# TYPE DATABASE USER CIDR-ADDRESS  METHOD
	
	  host   all     all   0.0.0.0/0     md5
	  
5. na raiz do projeto configurar o arquivo config.json para ter o acessos certo ao banco e demais configurações
<<<<<<< HEAD
6. configurar tambem os arquivos Dockerfile e docker-compose.yml para ter acessos aos portos se for o caso
7. criar a rede hash-network docker network create -d bridge hash-network
8. ir na raiz do projeto e executar o comando "docker-compose up -d" para criar o container e começar a funcionar
9. verificar o console do docker que o serviço de gRpc este funcionando no porto configurado
10. Pode ser usado um GUI como BloomRpc e os .proto que estão dentro do projeto para testar o serviço
11. em alguns casos pode acontecer que a hora do container esta diferente da do host, nesse caso é so reiniciar o serviço de docker
=======
	5.1 o host na configuração do banco dever ser o ip da maquina donde esta o banco, não pode ser localhost

6. configurar tambem os arquivos Dockerfile e docker-compose.yml para ter acessos aos portos
7. ir na raiz do projeto e executar o comando "docker-compose up -d" para criar o container e começar a funcionar
8. verificar o console do docker que o serviço de gRpc este funcionando no porto configurado
9. Pode ser usado um GUI como BloomRpc e os .proto que estão dentro do projeto para testar o serviço
>>>>>>> ba7baa1d5149f28e142d82269ea952462e83d888



