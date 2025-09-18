FROM node:20-alpine as build
WORKDIR /app
COPY app/package.json app/yarn.lock* app/package-lock.json* ./
RUN yarn install --frozen-lockfile || npm ci
COPY app ./
RUN yarn build || npm run build

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
