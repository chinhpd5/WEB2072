# Vue.js 3 Directives (Chỉ thị) Điều kiện và Danh sách

## 1. Giới thiệu về Directives

Directives là các thuộc tính đặc biệt trong Vue.js được bắt đầu bằng tiền tố `v-`. Chúng được sử dụng để thêm các hành vi động cho DOM elements.

## 2. Các Directives điều kiện và vòng lặp cơ bản

### v-if, v-else-if, v-else
- **Mục đích**: Điều kiện render element
- **Ví dụ**:
```vue
<template>
  <div v-if="score >= 90">Xuất sắc</div>
  <div v-else-if="score >= 70">Khá</div>
  <div v-else>Trung bình</div>
</template>

<script setup>
const score = 85
</script>
```

### v-show
- **Mục đích**: Hiển thị/ẩn element dựa trên điều kiện (sử dụng CSS display)
- **Ví dụ**:
```vue
<template>
  <div v-show="isVisible">Nội dung hiển thị</div>
</template>

<script setup>
const isVisible = true
</script>
```

### v-for
- **Mục đích**: Render danh sách các element
- **Ví dụ**:
```vue
<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ item.name }}
    </li>
  </ul>
</template>

<script setup>
const items = [
  { name: 'Item 1' },
  { name: 'Item 2' },
  { name: 'Item 3' }
]
</script>
```

## 3. Bài tập
```js
const products = [
]
```
