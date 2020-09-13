FROM centos:7

RUN \
  yum -y install httpd php php-cli php-common

RUN yum -y install mod_ssl openssl

RUN echo "<?php phpinfo(); ?>" > /var/www/html/info.php

COPY vegefoods /var/www/html

COPY docker.* /

COPY ssl.conf /etc/httpd/conf.d/default.conf

EXPOSE 80 443

CMD [ "apachectl", "-DFOREGROUND" ]