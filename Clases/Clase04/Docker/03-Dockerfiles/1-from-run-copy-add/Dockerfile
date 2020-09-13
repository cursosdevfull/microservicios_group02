FROM centos:7
RUN yum install httpd -y
COPY skater /var/www/html
# ADD skater /var/www/html
CMD [ "apachectl", "-DFOREGROUND" ]