# Bootstrap

Mục tiêu bài học:
- Hiểu khái niệm và vai trò của `Bootstrap` trong việc phát triển giao diện web hiện đại.
- Cài đặt và tích hợp Bootstrap vào dự án web.
- Các thành phần cơ bản trong `Bootstrap`.

---
## Khái niệm Bootstrap
`Bootstrap` là một `framework CSS` (giao diện) mã nguồn mở, giúp bạn xây dựng giao diện web đẹp, `responsive` (tương thích với mọi kích thước màn hình) một cách nhanh chóng và dễ dàng.
[Tài liệu (Docs)](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

---
## Cách cài đặt Bootstrap
### CDN:
Chỉ cần chèn đoạn mã sau vào trong phần `<head>` và trước thẻ đóng `</body>` của `HTML`:
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous"></script>
```
> Phù hợp cho người mới học hoặc dự án nhỏ.

### Tải về bản local:
- Bước 1: [Tải về từ trang chủ](https://getbootstrap.com/docs/5.3/getting-started/download/)
- Bước 2: Giải nén và thêm vào dự án:
```html
<!-- CSS -->
<link rel="stylesheet" href="css/bootstrap.min.css">
<!-- JS -->
<script src="js/bootstrap.bundle.min.js"></script>
```
> Phù hợp nếu bạn muốn giữ toàn bộ mã nguồn trong máy.

### Cài bằng npm (cho các project hiện đại)*
- Bước 1: Cài đặt thư viện
```bash
npm install bootstrap
```

- Bước 2: import trong file `JS/CS`S chính:
```js
// JavaScript (main.js hoặc index.js)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// CSS (có thể import trong JS hoặc file SCSS)
import 'bootstrap/dist/css/bootstrap.min.css';
```
---
### Cài đặt 1 số extension trong visual studio code
- Live server
- Bootstrap IntelliSense

---
## Các thành phần cơ bản trong bootstrap

### Căn chỉnh văn bản
- Vị trí

| Class            | Ý nghĩa          |
| ---------------- | ---------------- |
| `text-start`     | Căn trái         |
| `text-center`    | Căn giữa         |
| `text-end`       | Căn phải         |

- Dáng chữ

| Class             | Ý nghĩa                |
| ----------------- | ---------------------- |
| `text-lowercase`  | Viết thường toàn bộ    |
| `text-uppercase`  | Viết hoa toàn bộ       |
| `text-capitalize` | Viết hoa chữ cái đầu   |

- Kiểu chữ

| Class                          | Ý nghĩa        |
| ------------------------------ | -------------- |
| `fw-bold`                      | Chữ đậm        |
| `fst-italic`                   | In nghiêng     |
| `text-decoration-underline`    | Gạch chân      |
| `text-decoration-line-through` | Gạch ngang chữ |

- Kích thức

| Class   | Ý nghĩa              |
| ------- | -------------------- |
| `fs-1`  | Size 1 (lớn nhất)    |
| `fs-2`  | Size 2               |
| `fs-3`  | Size 3               |
| `fs-4`  | Size 4               |
| `fs-5`  | Size 5               |
| `fs-6`  | Size 6 (nhỏ nhất)    |

### Màu sắc
- Màu chữ: `text-*`
```html
<p class="text-primary">Chữ xanh</p>
<p class="text-danger">Chữ đỏ</p>
```

-Màu nền: `bg-*`
```html
<div class="bg-warning text-dark">Nền vàng</div>
```
> Các giá trị phổ biến: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`, `white`

### Khoảng cách - spacing

`Margin` (m) và `Padding` (p):
| Thuộc tính | Ý nghĩa                 | Thuộc tính | Ý nghĩa                 |
| ---------- | ----------------------- | ---------- | ----------------------- |
| `m-*`      | margin tất cả các phía  | `p-*`      | padding tất cả các phía |
| `mt-*`     | margin-top              | `pt-*`     | padding-top             |
| `mb-*`     | margin-bottom           | `pb-*`     | padding-bottom          | 
| `ms-*`     | margin-left (start)     | `ps-*`     | padding-left (start)    |
| `me-*`     | margin-right (end)      | `pe-*`     | padding-right (end)     |
| `mx-*`     | margin-left-right       | `px-*`     | padding-left-right      |
| `my-*`     | margin-top-bottom       | `py-*`     | padding-top-bottom      |

`$space` : 0 - 5, `auto`
> `auto` chỉ dành cho `margin`

- 1 `$space` = `16px`;

| Đơn vị  | Hệ số | ĐƠn vị (px)           |
| ------- | ----- |---------------------- |
| `0`     |  `0`  | `0` * `16` = `0px`    |
| `1`     | `0.25`| `0.25` * `16` = `4px` |
| `2`     | `0.5` | `0.5` * `16` = `8px`  |
| `3`     |  `1`  | `1` * `16` = `16px`   |
| `4`     | `1.5` | `1.5` * `16` = `24px` |
| `5`     |  `3`  | `3` * `16` = `48px`   |

```html
<div class="mt-3 mb-2 p-4">...</div>
```
> `mt-3` = `margin-top: 16px`;
> `mb-2` = `margin-bottom: 8px`;
> `p-4` = `padding: 24px`;

### Kích thước chiều rộng và chiều cao
```html
<div class="w-25">25% chiều rộng</div>
<div class="h-100">Chiều cao 100%</div>
```
| Class                                     | Ý nghĩa    |
| ----------------------------------------- | ---------- |
| `w-25`, `w-50`, `w-75`, `w-100`, `w-auto` | Chiều rộng |
| `h-25`, `h-50`, `h-75`, `h-100`, `h-auto` | Chiều cao  |

> 25, 50, 75, 100 tương ứng 25%, 50%, 75%, 100%

### Display
| Class                        | Mô tả                      |
| ---------------------------- | -------------------------- |
| `d-none`                     | Ẩn phần tử                 |
| `d-block`                    | Hiển thị block             |
| `d-inline`, `d-inline-block` | Hiển thị inline            |
| `d-flex`, `d-grid`           | Sử dụng layout flex / grid |

- `d-flex`: là `class` của `Bootstrap` dùng để biến một phần tử thành một `"flex container"`, giúp bạn dễ dàng sắp xếp, căn chỉnh các phần tử con bên trong theo chiều ngang hoặc dọc.

+ Chiều sắp xếp:

| Class         | Mô tả                        |
| ------------- | ---------------------------- |
| `flex-row`    | (Mặc định) sắp xếp **ngang** |
| `flex-column` | Sắp xếp **dọc**              |

+ `Justify Content` – Căn theo trục ngang (main axis)

| Class                     | Mô tả                        |
| ------------------------- | ---------------------------- |
| `justify-content-start`   | Căn trái (mặc định)          |
| `justify-content-center`  | Căn giữa                     |
| `justify-content-end`     | Căn phải                     |
| `justify-content-between` | Dàn đều 2 đầu                |
| `justify-content-around`  | Khoảng cách đều xung quanh   |
| `justify-content-evenly`  | Khoảng cách đều từng phần tử |

+ `Align Items` – Căn theo trục dọc (cross axis)

| Class                 | Mô tả              |
| --------------------- | ------------------ |
| `align-items-start`   | Căn lên trên       |
| `align-items-center`  | Căn giữa chiều cao |
| `align-items-end`     | Căn xuống dưới     |
| `align-items-stretch` | Kéo dãn chiều cao  |


