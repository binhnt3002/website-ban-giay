# Lưu ý:
Đây là trang web đơn giản, được xây dựng trong quá trình học trên trường nên sẽ không tránh được nhiều sai sót cơ bản thiết yêu của một website

Hiện tại chưa có thể deploy hosting webstie 

Nhưng có thể chạy thông qua localhost dùng Docker để chạy dữ liệu

# chạy web thông qua Docker
Yêu Cầu : Cần cài đặt Docker sẵn trong máy

Bước 1 : tải file .zip hoặc clone project thông qua git clone
```
git clone https://github.com/binhnt3002/website-ban-giay.git
```

Bước 2: tiến hành chạy file Docker dùng ```docker compose```

- Thu mục Back-end
```
 cd Back-end/ && docker compose up --build
```
Hãy mở thêm 1 terminal
- Thư mục Font-end
```
 cd  Font-end/ && docker build -t font-end . && docker run font-end
```
# Website bán giày Nike

Sử dụng ReactJS để xây dựng lên giao diện chính cho website

Sử dụng NodeJS để xây dựng các dữ liệu và kết nối cơ sở dũ liệu

sử dụng MongoDB để lưu trữ các dữ liệu

sử dụng ViteJS để xây dựng Admin Page

# Một Số giao diện Demo

![image](https://github.com/binhnt3002/website-shoes-Nike/assets/110091348/b850a3d1-8927-42e5-86d5-0b76c36bffcd)

![image](https://github.com/binhnt3002/website-shoes-Nike/assets/110091348/23fdd4b6-da0e-40e1-996d-d2bebf6ac230)

![image](https://github.com/binhnt3002/website-shoes-Nike/assets/110091348/00f2e84f-b244-4f0d-a0e7-14c2d59e27d3)

![image](https://github.com/binhnt3002/website-shoes-Nike/assets/110091348/058251d9-4eae-41a3-91f8-cb5498618412)

![image](https://github.com/binhnt3002/website-ban-giay/assets/110091348/82b7dab9-a7cb-4e34-bf02-f3c5a5ae795e)

