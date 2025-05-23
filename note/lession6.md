# Lắng Nghe Sự Kiện và Liên Kết Dữ Liệu Trong Form

## Mục tiêu

- Hiểu về Listen to Events (Lắng nghe sự kiện), Trình xử lý phương thức 
- Các sự kiện về chuột, bàn phím… 
- Nắm được cách thức liên kết dữ liệu trong Form binding 

---
## 1. Listen to Events (Lắng nghe sự kiện), Trình xử lý phương thức

Lắng nghe sự kiện là một phần cốt lõi trong việc tương tác với người dùng trong các ứng dụng web. Việc này cho phép chúng ta phản hồi khi người dùng thực hiện hành động như click chuột, nhập liệu bàn phím, rê chuột,...

Trong Vue.js, chúng ta sử dụng cú pháp `v-on` hoặc `@` để lắng nghe các sự kiện DOM.
Phương thức xử lý (method handler) là các hàm trong phần methods của Vue component dùng để xử lý các sự kiện.


Ví dụ:
```vue
<template>
  <button @click="handleClick">Click me</button>
</template>

<script setup>
  handleClick() {
    alert('Bạn vừa click nút!');
  }
</script>
```

---
## 2. Các sự kiện về chuột và bán phím

Vue hỗ trợ lắng nghe các loại sự kiện phổ biến:
- Sự kiện chuột:
```
| Sự kiện        | Mô tả                                      |
| -------------- | ------------------------------------------ |
| `@click`       | Khi người dùng click chuột                 |
| `@dblclick`    | Double click                               |
| `@mousedown`   | Nhấn chuột xuống                           |
| `@mouseup`     | Nhả chuột ra                               |
| `@mouseenter`  | Di chuột vào phần tử (không lan xuống con) |
| `@mouseleave`  | Di chuột ra khỏi phần tử                   |
| `@mousemove`   | Di chuyển chuột trong phần tử              |
| `@contextmenu` | Chuột phải (mở menu ngữ cảnh)              |

```
- Sự kiện bàn phím:
```
| Sự kiện                    | Mô tả                                             |
| -------------------------- | ------------------------------------------------- |
| `@keydown`                 | Nhấn một phím                                     |
| `@keyup`                   | Nhả một phím                                      |
| `@keypress` *(deprecated)* | Được dùng trong Vue 2, không nên dùng nữa         |
| Modifier phổ biến          | `@keydown.enter`, `@keyup.esc`, `@keydown.ctrl.a` |
|                            | `@keydown.delete`, `@keyup.shift`, ...            |

```
- Ví dụ:
```vue
<input @keydown.enter="submitForm" placeholder="Nhấn Enter để gửi" />
```

---
## 3. Nắm được cách thức liên kết dữ liệu trong Form
Liên kết dữ liệu hai chiều là điểm mạnh của Vue thông qua v-model. Nó cho phép bạn ràng buộc giá trị của form với dữ liệu trong component.

```
| Sự kiện   | Mô tả                                       |
| --------- | ------------------------------------------- |
| `@input`  | Khi người dùng thay đổi giá trị trong input |
| `@change` | Khi giá trị thay đổi và mất focus           |
| `@focus`  | Khi phần tử được focus                      |
| `@blur`   | Khi phần tử mất focus                       |
| `@submit` | Gửi form                                    |
| `@reset`  | Reset form                                  |
```

Các modifier trong form
```
| Modifier   | Tác dụng                                              |
| ---------- | ----------------------------------------------------- |
| `.stop`    | `event.stopPropagation()` – ngăn sự kiện lan ra ngoài |
| `.prevent` | `event.preventDefault()` – ngăn hành vi mặc định      |
| `.self`    | Chỉ kích hoạt nếu sự kiện xảy ra trên chính phần tử   |
| `.capture` | Sử dụng giai đoạn capture                             |
| `.once`    | Chỉ chạy một lần duy nhất                             |
| `.passive` | Tối ưu cho sự kiện cuộn                               |
```

```vue
<!-- text -->
<input type="text" v-model="textValue" />

<!-- checkbox -->
<input type="checkbox" value="HTML" v-model="coursesName"/>HTML <br/>
<input type="checkbox" value="CSS" v-model="coursesName"/>CSS <br/>
<input type="checkbox" value="JavaScript" v-model="coursesName"/>JavaScript <br/>

<!-- radio -->
<input type="radio" value="Red" v-model="favoriteColor"/>
<input type="radio" value="Green" v-model="favoriteColor"/>

<!-- select - option -->
<select id="language"v-model="selectedLanguage">
  <option value="JavaScript">JavaScript</option>
  <option value="Java">Java</option>
  <option value="C++">C++</option>
</select>

```
