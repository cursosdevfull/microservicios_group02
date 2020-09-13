FROM centos:7

RUN \
  yum install -y epel-release && \ 
  yum update -y && \
  yum install -y nginx

CMD [ "nginx","-g","daemon off;" ]