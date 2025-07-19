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
Yêu cầu:
- Sử dụng `v-for` để duyệt mảng `products` hiển thị danh sách sản phẩm theo table (bootstrap)
- `name`: Tên sản phẩm
- `description`: Mô tả
- `price`: Giá bán
- `inStock`: Trạng thái còn hàng, Sử dụng `v-if` `v-else` hiển thị số lượng sản phẩm `quantity` nếu `inStock = true`; `Hết hàng` nếu `inStock = false`
- `category`: Danh mục
- `rating`: Đánh giá, Sử dụng `v-if`, `v-else-if`, `v-else` để hiện thị số `⭐` sản phẩm , Lưu ý làm tròn xuống (Ví dụ: 2,3 = `⭐⭐`)
- `imageUrl`: Hình ảnh, sử dụng thẻ `img`
- `tags`: Danh sách thẻ tag, Sử dụng `v-for` để hiển thị danh sách `tags`
- `featured`: Ứng dụng `v-show` để hiển thị `Sản phẩm nổi bật` nếu `featured = true` hoặc ` ` nếu `featured = false`
```js
const products = [
  {
    id: 1,
    name: 'Laptop Acer Aspire 7',
    description: 'Laptop gaming giá rẻ cho sinh viên.',
    price: 15000000,
    inStock: true,
    category: 'Laptop',
    rating: 4.2,
    imageUrl: 'https://cdn.hoanghamobile.com/i/previewV2/Uploads/2022/10/03/image-removebg-preview-60.png',
    tags: ['gaming', 'student', 'budget'],
    quantity: 10,
    featured: true
  },
  {
    id: 2,
    name: 'MacBook Air M1',
    description: 'Laptop nhẹ, hiệu năng cao cho lập trình viên.',
    price: 22000000,
    inStock: false,
    category: 'Laptop',
    rating: 3.8,
    imageUrl: 'https://cdn.hoanghamobile.com/i/previewV2/Uploads/2024/11/16/mac-m1-ghi-1.png',
    tags: ['apple', 'm1', 'developer'],
    quantity: 0,
    featured: false
  },
  {
    id: 3,
    name: 'Dell XPS 13',
    description: 'Thiết kế cao cấp, hiệu năng ổn định.',
    price: 28000000,
    inStock: true,
    category: 'Laptop',
    rating: 2.6,
    imageUrl: 'https://cdn.hoanghamobile.com/i/previewV2/Uploads/2024/10/17/71034921-1.png',
    tags: ['premium', 'portable'],
    quantity: 5,
    featured: true
  },
  {
    id: 4,
    name: 'HP Pavilion 15',
    description: 'Lựa chọn tầm trung cho công việc văn phòng.',
    price: 17000000,
    inStock: true,
    category: 'Laptop',
    rating: 4.0,
    imageUrl: 'https://cdn.hoanghamobile.com/i/previewV2/Uploads/2023/12/22/hp-15s-silver-1.png',
    tags: ['office', 'midrange'],
    quantity: 8,
    featured: false
  },
  {
    id: 5,
    name: 'Lenovo IdeaPad 3',
    description: 'Máy tính xách tay cơ bản cho học sinh.',
    price: 12000000,
    inStock: false,
    category: 'Laptop',
    rating: 3.9,
    imageUrl: 'https://cdn.hoanghamobile.com/i/previewV2/Uploads/2024/07/11/lenovo-loq-15iax9-83fq0005vn-1.png',
    tags: ['basic', 'student'],
    quantity: 0,
    featured: false
  },
];

```