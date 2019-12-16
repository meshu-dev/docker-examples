FROM php:7.2-apache

# Install PHP Extensions
RUN apt-get update && \
  apt-get install -y libfreetype6-dev libjpeg62-turbo-dev libc-client-dev libkrb5-dev && \
  docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/  &&  \
  docker-php-ext-install gd  &&  \
  docker-php-ext-install pdo_mysql

# Add vhost file
COPY vhost.conf /etc/apache2/sites-available
RUN mkdir -p /var/www/html/php/public && a2ensite vhost.conf

# Install Apache2 Rewrite Module
RUN a2enmod rewrite  &&  \
	service apache2 restart

# Assign docker user ID 1000 to Apache user
RUN usermod -u 1000 www-data

# Set default directory
WORKDIR /var/www
