# Lưu ý:
đây là trang web đơn giản, được xây dựng trong quá trình học trên trường nên sẽ không tránh được nhiều sai sót cơ bản thiết yêu của một website
Đây chỉ source code để tham khảo và đã che đi tài khoản mật khẩu đb và không thể hiển thị các sản như hình demo
Hiện tại chưa có thể deploy hosting webstie , nhưng có thể chạy thông qua localhost

# chạy web thông qua Docker
Yêu Cầu : Cần cài đặt Docker sẵn trong máy
Bước 1 : tải file .zip hoặc clone project thông qua git clone
```
git clone https://github.com/binhnt3002/website-ban-giay.git
```
Bước 2 : chạy lệnh khởi tạo

- Thư mục Font-end
```
cd Font-end/ && npm install 
```
- Thư mục admin
```
cd admin/ && npm install 
```
Bước 3: tiến hành chạy file Docker dùng ```docker compose```
Thu mục Back-end
```
 cd Back-end/ && docker compose up --build
```
Bước 4: khi chạy docker thành công 
tạo thêm một terminal để chạy font-end hoặc admin ```Ctrl + Shift + 5``` trên Visual Studio Code Windows
```
cd Font-end/ && npm start
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

