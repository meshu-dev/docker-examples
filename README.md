# Docker Dev

This setup allows you to use docker and docker-compose easily for your development.

## Setup

1. Open up terminal application and change to a directory where you want your docker dev setup, an example would be...

    ```cd ~/```

2. Clone repository and then change directory to inside of the repository

    ```git clone git@github.com:meshu-dev/docker-dev.git```

    ```cd docker-dev```

3. Create docker network by running the following command...

    ```sh dev setup_network```

4. Create and run the reverse proxy container by running the following command...

    ```sh dev init```

5. Update hosts file with helloworld localhost domain...

    ```sudo vim /etc/hosts```

    ```127.0.0.1   helloworld.docker```

6. Create and run the helloworld container by running the following command...

    ```sh dev dc helloworld up -d```

7. Up open your web browser and go to http://helloworld.docker and the page should show the message "Hello World".

8. Start expanding the docker dev setup by adding your own services, check below to see commands on how to use setup.

## Commands
The dev file is a bash script with the following commands available.

### Service command

Usage:

```sh dev service [service name] [docker-compose command]```

Run a docker-compose command on a service.

___

### Init

Usage:

```sh dev init```

Starts up reverse proxy required to run websites.

___

### Setup Network

Usage:

```sh dev setup_network```

Creates docker network, only required to be run once after setting up docker dev setup

## Docker compose commands

A full list of docker-compose commands can be found at [https://docs.docker.com](https://docs.docker.com/compose/reference").

Here is a list of common docker-compose commands you would use...

### Docker Compose - Up

Usage:

```sh dev service [service name] up -d```

Start up service docker containers.

___

### Docker Compose - Down

Usage:

```sh dev service [service name] down```

Shutdown service docker containers.

___

### Docker Compose - Build

Usage:

```sh dev service [service name] build```

Build service docker containers.
