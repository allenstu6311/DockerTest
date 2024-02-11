FROM nginx
# ENV VITE_ENV=development

COPY ./dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

# docker build -t myvue_20230821 . 鏡像檔指令
# 素材 https://hackmd.io/@mko123654/BJBw4ce63
