# define qual vai ser a imagem que esse docker vai usar
FROM node:20-slim

RUN apt-get update -y && apt-get install -y openssl procps
#Define qual o local de trabalho que vamos ter dentro da instancia
#as imagens node, geralmente vem com um usuario node que temos permissao de arquivos
WORKDIR /home/node/app

# O Usuario padrao eh o root, mas mudamos para o node assim
USER node

#So com os comandos acima ja vai rodar o container
#Esse proximo comando auqi vai executar este comando no container e mostrar o log para nos
CMD [ "tail", "-f", "/dev/null"]