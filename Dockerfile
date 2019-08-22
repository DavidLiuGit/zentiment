# this image will be used to build the frontend and prep it for deployment
# use NodeJS as the base image for the build & test step
FROM node:10.16.3-alpine AS frontend-builder

#
# ARG $build_target=production

WORKDIR /app
COPY . .
RUN npm install 
RUN npm run build -- --prod



# build nginx SPA container
FROM nginx:1.15

# copy over static files and nginx configuration file
COPY --from=frontend-builder /app/dist/* /usr/share/nginx/html
COPY --from=frontend-builder /app/nginx-spa.conf /etc/nginx/conf.d/default.conf