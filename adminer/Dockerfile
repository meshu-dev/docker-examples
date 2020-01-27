FROM adminer

EXPOSE 8080

# Switch current user to root to have permission to run commands
USER root

RUN apk update && \
	apk add autoconf openssl-dev g++ make && \
    pecl install mongodb && \
    docker-php-ext-enable mongodb && \
    apk del --purge autoconf openssl-dev g++ make

# Update server
#RUN apt-get -y update

# Increase Upload and Post size limits
#RUN sed -i 's/upload_max_filesize = 2M/upload_max_filesize = 1000M/' /etc/php5/fpm/php.ini
#RUN sed -i 's/post_max_size = 8M/post_max_size = 1000M/' /etc/php5/fpm/php.ini

# Install MongoDB PHP extension
#RUN apt-get install -y php-pear php5-dev libpcre3-dev
#RUN pecl install mongodb
#RUN echo "extension=mongodb.so" > /etc/php5/mods-available/mongodb.ini
#RUN php5enmod mongodb

# Apply config changes
#RUN service php5-fpm reload && service nginx reload
