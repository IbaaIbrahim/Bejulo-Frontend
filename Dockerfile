FROM nginx:alpine

# Remove default nginx static assets and configuration
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/*

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static frontend files to web root
COPY . /usr/share/nginx/html/

# Clean up build/operational files from web root
RUN rm -rf /usr/share/nginx/html/Dockerfile \
           /usr/share/nginx/html/nginx.conf \
           /usr/share/nginx/html/docker-compose.yml \
           /usr/share/nginx/html/docker-compose*.yml \
           /usr/share/nginx/html/Makefile \
           /usr/share/nginx/html/run.sh \
           /usr/share/nginx/html/kill.sh \
           /usr/share/nginx/html/README.md \
           /usr/share/nginx/html/logs \
           /usr/share/nginx/html/docs

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1:80/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
