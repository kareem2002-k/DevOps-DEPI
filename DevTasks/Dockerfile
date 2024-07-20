
FROM node:lts-alpine AS build

WORKDIR /app


COPY simple-task/package*.json ./


RUN npm install --production


COPY simple-task/ .


RUN npm run build


FROM node:lts-alpine

WORKDIR /app


COPY --from=build /app/dist ./dist


EXPOSE 5173

ENV NODE_ENV production

RUN npm install -g serve

CMD ["serve", "-s", "dist", "-l", "5173"]
