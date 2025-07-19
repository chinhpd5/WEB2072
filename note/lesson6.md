# Component trong VueJS

## Mục tiêu bài học
- Hiểu về `Component` cơ bản
- Sử dụng `Props` để truyền dữ liệu từ `Comoponent cha` xuống `Component con`
- Sử dụng `Emit()` để gửi dữ liệu trừ `Component con` lên `Component cha`
- Tìm hiểu `Slot`, `Prodive` và `Inject` để gửi dữ liệu mà không cần `Props`

---
## Component là gì ?
- `Component` là một khối xây dựng cơ bản cho phép bạn chia nhỏ giao diện người dùng (UI) thành các phần nhỏ, độc lập và có thể tái sử dụng. 
- Mỗi `component` có thể chứa HTML, CSS, và JavaScript riêng, giúp bạn dễ dàng quản lý và phát triển các phần khác nhau của ứng dụng.
- Lý do cần sử dụng `Component`:
  + Tái sử dụng: có thể dùng lại trong nhiều phần của ứng dụng, giảm thiểu lặp lại mã.
  + Độc lập: Hoạt động độc lập, tương tác dữ liệu qua props và events.
  + Đóng gói: Chứa HTML, CSS, và JS trong một khối duy nhất, dễ quản lý và bảo trì.
  + Tổ chức cây: tổ chức thành một cây component lồng nhau, với component gốc ở đỉnh.

-  Mỗi `component` Vue trong một tệp riêng biệt với đuôi .vue - được gọi là Single-File Component (viết tắt SFC ) thường có 3 thành phần chính `Template` (HTML), `Script` (JavaScript), `Style` (CSS):
- Tạo `component` có tên `Hello.vue`
```vue
<template>
<div>
  <h1>{{title}}</h1>
  <button @click="greet">Click me!</button>
</div>
</template>

<script setup>
import { ref } from"vue";

const title = ref("Welcome to Vue Component");
const message = ref("This is a reusable component.");

function greet() {
  console.log(message.value);
}
</script>

<style scoped>
h1 { color: blue; }
</style>
```

---
## Props là gì?
- `Props` (viết tắt của `properties`) là một cơ chế cho phép truyền dữ liệu từ `component cha` xuống `component con`
- Là các thuộc tính mà `component cha` truyền xuống `component con` thông qua các `attribute` trong `template`.
- `Props` giúp tái sử dụng `component` bằng cách làm cho `component` linh hoạt với các giá trị khác nhau.

+ `ParentComponent.vue`:
```vue
<template>
  <div>
    <h1>Đây là component cha</h1>
    <ChildComponent title="Xin chào Vue 3" :count="10" />
  </div>
</template>

<script setup>
import ChildComponent from './ChildComponent.vue'
</script>
```

+ `ChildComponent.vue`:
```vue
<template>
  <div style="border: 1px solid gray; padding: 10px;">
    <h2>{{ title }}</h2>
    <p>Số đếm là: {{ count }}</p>
  </div>
</template>

<script setup>
// Khai báo props sử dụng defineProps trong <script setup>
const props = defineProps({
  title: String,
  count: Number
})
</script>

```

---
## Emit() là gì?
- `emit` là cơ chế giúp `component con` gửi sự kiện lên `component cha`. 
- Đây là cách giao tiếp từ dưới lên trên trong mô hình `component` — ngược lại với `props` (dùng để truyền dữ liệu từ cha xuống con).

+ `ChildComponent.vue`
```vue
<template>
  <button @click="increase">Tăng</button>
</template>

<script setup>
const emit = defineEmits(['updateCount']) // Khai báo sự kiện emit

function increase() {
  emit('updateCount', 1) // Gửi sự kiện lên cha, kèm dữ liệu (ví dụ: số 1)
}
</script>
```

+ `ParentComponent.vue`:
```vue
<template>
  <div>
    <h1>Giá trị: {{ count }}</h1>
    <ChildComponent @updateC  ount="handleUpdate" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const count = ref(0)

function handleUpdate(value) {
  count.value += value
}
</script>
```
