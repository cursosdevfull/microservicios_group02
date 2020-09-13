FROM centos:7

RUN yum install httpd -y

WORKDIR /var/www/html

COPY skater .

ENV contenido=prueba

RUN echo "$contenido" > ./test.html

EXPOSE 80

# ADD skater /var/www/html
CMD [ "apachectl", "-DFOREGROUND" ]