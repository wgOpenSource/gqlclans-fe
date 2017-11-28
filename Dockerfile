FROM node:6.10.0

RUN mkdir /frontend
WORKDIR /frontend

COPY package.json package.json
COPY scripts/start.sh start.sh
COPY app app
COPY public public
COPY webpack.config.babel.js webpack.config.babel.js
COPY .babelrc .babelrc
COPY package-lock.json package-lock.json
RUN npm install

EXPOSE 8010

CMD /frontend/start.sh
