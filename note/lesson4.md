# Giới thiệu và Cài đặt dự án với Vue.js

Mục tiêu bài học:
- Tìm hiểu `VueJS` là gì?
- Tạo dự án `VueJS`
- Cài đặt `Bootstrap` trong `VueJS`
- Giới thiệu 1 số cú pháp trong `VueJS`

## VueJS là gì ?

[Vue.js](https://vuejs.org/) là một `framework JavaScript` dùng để xây dựng giao diện người dùng. 
- `Vue` tập trung vào lớp giao diện và rất dễ tích hợp với các thư viện hoặc `project` hiện có. 
- `Vue` cũng có thể được sử dụng để xây dựng các ứng dụng đơn trang `(SPA)` mạnh mẽ khi kết hợp với các thư viện hiện đại và công cụ build.

## Single Page Application (SPA) là gì?
- SPA là viết tắt của Single Page Application – tức là Ứng dụng một trang.
- Ứng dụng web mà toàn bộ nội dung được hiển thị trong một trang HTML duy nhất, và không cần tải lại trang khi người dùng điều hướng giữa các phần khác nhau

## Tính năng chính

- Kết hợp HTML, CSS và JavaScript một cách linh hoạt.
- Virtual DOM giúp tăng hiệu suất render.
- Reactivity system mạnh mẽ.
- Cấu trúc component giúp tái sử dụng mã dễ dàng.
- Dễ học nhưng có thể mở rộng cho ứng dụng lớn.

---

## Bắt đầu với Vue 3

### Yêu cầu

- Node.js >= 14
- [Tải NodeJS](https://nodejs.org/en/download)
- npm hoặc yarn

### Khởi tạo project với Vite (đề xuất cho Vue 3)
1. Mở terminal:
```bash
  npm create vite@latest
```
Nếu có câu hỏi `Proceed to install?` -> Nhấn `enter`
2. Nhập tên project, Ví dụ: `web2072`.
3. Chọn `Vue`.
4. Chọn `JavaScript`.
5. Di chuyển vào dự án, cài đặt thư viện, khởi chạy dự án
```bash
  cd web2072
  npm install
  npm run dev
```
---

### Thêm thư viện bootstrap

- Cài đặt, mở terminal: `npm i bootstrap`
- Tại `src/main.js` thêm nội dung:
```js
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.bundle.min.js'
```

### 2.REACTIVITY: ref và reactive
- Với Vue3, ref và reactive đều được dùng để tạo biến, có thể reactive (phản ứng khi thay đổi - quản lý) trong Composition API

- ref
```js
  import { ref } from 'vue'

  const count = ref(0)     // số
  const name = ref('Vue3')  // chuỗi
  const gender = ref(true)  // boolean
```
  + ref tạo ra một đối tượng `.value`.
  + Vue theo dõi `.value` và tự động cập nhật giao diện khi nó thay đổi.
  + Có thể dùng được cho mọi kiểu dữ liệu: number, string, boolean, object, array, v.v. Tuy nhiên khuyến cáo sử dụng cho các kiểu dữ liệu đơn giản: number, string, boolean.

- reactive
```js
  import { reactive } from 'vue'

  const user = reactive({
    name: 'Alice',
    age: 25
  })
```

  + Không cần `.value` khi truy cập.
  + Tự động theo dõi các thuộc tính bên trong object (deep reactive).
  + Chỉ áp dụng cho kiểu dữ liệu object hoặc array.
---

## Bài tập
Hiển thị mảng `students` theo dạng sử dụng `bootstrap`:
```js
  const students = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    gender: true,
    gpa: 3.5,
    major: "Computer Science"
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    gender: false,
    gpa: 3.8,
    major: "Information Systems"
  },
  {
    id: 3,
    name: "Lê Minh Dũng",
    gender: true,
    gpa: 3.2,
    major: "Software Engineering"
  },
  {
    id: 4,
    name: "Phạm Ngọc Hân",
    gender: false,
    gpa: 3.9,
    major: "Data Science"
  },
  {
    id: 5,
    name: "Hoàng Trung Kiên",
    gender: true,
    gpa: 2.9,
    major: "Cybersecurity"
  }
];

```