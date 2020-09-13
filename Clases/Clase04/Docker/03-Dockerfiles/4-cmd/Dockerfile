FROM centos:7
RUN yum install httpd -y

LABEL version=1.0
LABEL description="Web Sport with Apache"
LABEL env="web-apache"


WORKDIR /var/www/html

COPY skater .
COPY run.sh /run.sh

RUN echo "$(whoami)" > ./user1.html

RUN useradd sergio
RUN chown -R sergio .

USER sergio

RUN echo "$(whoami)" > ./user2.html

ENV contenido=prueba

RUN echo "$contenido" > ./test.html

USER root

EXPOSE 80

# ADD skater /var/www/html
CMD [ "sh","/run.sh" ]