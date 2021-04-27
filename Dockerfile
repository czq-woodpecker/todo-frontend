FROM nginx:1.17.7
COPY ./build /usr/share/nginx/html
COPY ./nginx.conf /usr/local/etc/nginx/nginx.conf



