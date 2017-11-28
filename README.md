# gqlclans-fe

# Installation

Install dependencies:

    ```
    npm install
    ```


# Usage

Enable webpack dev server by running:

    ```
    npm start
    ```

Now you can visit [http://localhost:8010](http://localhost:8010)


# Docker

To run container from docker pull backend and frontend containers from docker registry:

    ```
    docker create --name=gqlclans -t -i -p 8567:8567 sudoaptget/gqlclans:latest
    docker start -i gqlclans

    docker create --name=gqlclans-fe -t -i -p 8010:8010 -l gqlclans:gqlclans sudoaptget/gqlclans-fe:latest
    docker start -i gqlclans-fe
    ```

Frontend service will be available via [http://0.0.0.0:8010](http://0.0.0.0:8010)
and backend via [http://0.0.0.0:8567](http://0.0.0.0:8567) as well