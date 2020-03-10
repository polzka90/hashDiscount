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
6. configurar tambem os arquivos Dockerfile e docker-compose.yml para ter acessos aos portos
7. ir na raiz do projeto e executar o comando "docker-compose up -d" para criar o container e começar a funcionar
8. verificar o console do docker que o serviço de gRpc este funcionando no porto configurado
9. Pode ser usado um GUI como BloomRpc e os .proto que estão dentro do projeto para testar o serviço

## Serviço 1: Desconto invidual de produto

