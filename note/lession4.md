# Data Binding

- Data Binding (liên kết dữ liệu) là một khái niệm cốt lõi trong Vue.js (và nhiều framework khác).
- Cho phép bạn đồng bộ hóa dữ liệu giữa phần JavaScript (logic) và giao diện người dùng (HTML) một cách tự động và linh hoạt.
- Data Binding giúp giao diện tự động cập nhật khi dữ liệu thay đổi và ngược lại

## One-way binding (Ràng buộc 1 chiều)
- Dữ liệu đi từ Component (logic) -> Giao diện
- Vue sử dụng cú pháp `{{}}` và `v-bind`
- Ví dụ:
```vue
  <template>
    <h1>{{ title }}</h1>
    <img v-bind:src="imageUrl" />
  </template>

  <script setup>
    const title = 'Chào mừng đến với Vue 3'
    const imageUrl = 'https://example.com/image.png'
  </script>
```
---

## Chỉ thị (Directive)
- Directive là những thuộc tính đặc biệt trong Vue bắt đầu bằng `v-` được thêm vào các thẻ HTML.
- Mỗi Directive cung cấp một tính năng tương ứng hổ trợ người phát triển web code trên giao diện dễ dàng hơn.

---
## Attribute Binding
- Attribute binding (liên kết thuộc tính) trong Vue.js là cách để bạn gán giá trị động (JavaScript) cho các thuộc tính HTML thông qua cú pháp `v-bind` hoặc dấu `:`.
- Ví dụ:
```vue
  <!-- Dùng v-bind đầy đủ -->
  <img v-bind:src="imageUrl" />

  <!-- Dùng dấu : rút gọn -->
  <img :src="imageUrl" />

  <!-- Ví dụ thực tế -->
  <script setup>
    const imageUrl = 'https://example.com/image.png'
    const isDisabled = true
    const buttonClass = 'btn-primary'
  </script>

  <template>
    <img :src="imageUrl" alt="Ảnh minh hoạ" />
    
    <button :disabled="isDisabled">Gửi</button>

    <button :class="buttonClass">Nút có class động</button>
  </template>
```

---
## Two-way binding (Ràng buộc 2 chiều)
- Dữ liệu đi từ Component (logic) <-> Giao diện và ngược lại
- Dùng `v-model`, thường dùng cho biểu mẫu `form input`
- Ví dụ:
```vue
  <template>
    <input v-model="name" />
    <p>Bạn vừa nhập: {{ name }}</p>
  </template>

  <script setup>
    import { ref } from 'vue'
    const name = ref('')
  </script>
```

----
## Event Binding
- Event Binding (ràng buộc sự kiện) trong Vue.js là cách để bạn gắn các hàm xử lý sự kiện (event handler) vào các sự kiện DOM như click, input, submit, v.v.
- Ví dụ:
```vue
  <!-- Cú pháp đầy đủ -->
  <button v-on:click="handleClick">Nhấn tôi</button>

  <!-- Cú pháp rút gọn -->
  <button @click="handleClick">Nhấn tôi</button>
```
---

## Class và Style Binding
- Vue.js cung cấp cú pháp rất linh hoạt để ràng buộc động các class CSS và style inline vào phần tử HTML — cho phép bạn điều chỉnh giao diện theo dữ liệu một cách hiệu quả.

### Class Binding
- Class binding cho phép bạn gán class CSS vào phần tử dựa vào giá trị biến, điều kiện hoặc object/array.
- Cú pháp:
```vue
<!-- Gán class tĩnh -->
<div class="active"></div>

<!-- Gán class động bằng string -->
<div :class="activeClass"></div>

<!-- Gán class động bằng object -->
<div :class="{ active: isActive, 'text-danger': hasError }"></div>

<!-- Gán class bằng array -->
<div :class="[activeClass, errorClass]"></div>

```
- Sử dụng:
```vue
<script setup>
import { ref } from 'vue'

const isActive = ref(true)
const hasError = ref(false)
const activeClass = 'active'
const errorClass = 'text-danger'
</script>

<template>
  <div :class="{ active: isActive, 'text-danger': hasError }">
    Nội dung có class động
  </div>

  <div :class="[activeClass, errorClass]">
    Class từ mảng
  </div>
</template>
```

### Style Binding
- Style binding giúp bạn gán CSS inline một cách động (thường dùng cho style tùy biến như màu sắc, kích thước, v.v.).
- Cú pháp:
```vue
<!-- Gán style tĩnh -->
<div style="color: red;"></div>

<!-- Gán style động bằng object -->
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

<!-- Gán style bằng biến object -->
<div :style="styleObject"></div>
```
- Ví dụ:
```vue
Style binding giúp bạn gán CSS inline một cách động (thường dùng cho style tùy biến như màu sắc, kích thước, v.v.).
```








