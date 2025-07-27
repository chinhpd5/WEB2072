# LIFECYCLE TRONG VUE - SỬ DỤNG AXIOS CALL API

## Lifecycle trong Vue

- Vòng đời (lifecycle) của một component Vue là chuỗi các giai đoạn từ khi component được khởi tạo, render, cập nhật, cho đến khi nó bị huỷ. Vue cung cấp các hook (hàm đặc biệt) để bạn có thể can thiệp vào từng giai đoạn này.

---
### Tổng quan các giai đoạn
```

| Giai đoạn          | Hook tương ứng      | Mô tả ngắn gọn                                             |
| ------------------ | ------------------- | ---------------------------------------------------------- |
| **Trước mount**    | `onBeforeMount()`   | Gọi trước khi component được gắn vào DOM.                  |
| **Sau mount**      | `onMounted()`       | Gọi sau khi component đã được gắn vào DOM.                 |
| **Trước update**   | `onBeforeUpdate()`  | Gọi trước khi component cập nhật lại do reactive thay đổi. |
| **Sau update**     | `onUpdated()`       | Gọi sau khi component cập nhật lại xong.                   |
| **Trước unmount**  | `onBeforeUnmount()` | Gọi trước khi component bị huỷ.                            |
| **Sau unmount**    | `onUnmounted()`     | Gọi sau khi component đã bị huỷ.                           |
```
---
### 1. onBeforeMount() 

- Thời điểm gọi:  là một `hook` được gọi ngay trước khi `component` được `mount` vào DOM.
- Thường sử dụng cho việc thiết lập dữ liệu và thực hiện các hành động cần thiết trước khi `component` hiển thị, nhưng không thể tương tác với `DOM`.
- Ví dụ:
```js
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
  console.log('Component sắp được mount.')
})
```

---
### 2. onMounted()
- Thời điểm gọi: Sau khi `component` được `mount` xong và `DOM` đã sẵn sàng.
- Dùng để: Gọi `API`, khởi tạo `event listener`, thao tác với `DOM`.
- Ví dụ:
```js
import { onMounted } from 'vue';

onMounted(() => {
  console.log('Component đã được mount. DOM đã sẵn sàng.')
})
```

---
### 3. onBeforeUpdate()
- Là một `hook` được gọi ngay trước khi `component` được cập nhật do thay đổi trạng thái.
- Thường sử dụng để thực hiện các hành động chuẩn bị trước khi cập nhật, nhưng bạn không thể truy cập `DOM` đã cập nhật trong `hook` này.
- Ví dụ:
```js
import { onBeforeUpdate } from 'vue';

onBeforeUpdate(() => {
  console.log('Sắp cập nhật component (data vừa thay đổi).')
})

```

---
### 4. onUpdated()
- Được gọi ngay sau khi component đã cập nhật `DOM` của nó do thay đổi `state component`.
- So sánh `DOM` cũ và mới, hoặc chạy logic phụ thuộc vào DOM mới.
- Lưu ý: Không nên thay đổi trạng thái của `component` trong `onUpdated()`, vì có thể dẫn đến vòng lặp cập nhật vô hạn.
- Ví dụ: 
```js
import { onUpdated } from 'vue'

onUpdated(() => {
  console.log('Component đã được cập nhật.')
})

```

---
### 5. onBeforeUnmount()
- Là một hook được gọi ngay trước khi một `component` bị hủy bỏ `(unmounted)` khỏi `DOM`.
- Dùng để: Dọn dẹp tài nguyên: `clearInterval`, huỷ `listener`, `disconnect socket`...
- Ví dụ
```js
import { onBeforeUnmount } from 'vue'

onBeforeUnmount(() => {
  console.log('Component sắp bị huỷ.')
})

```

---
### 6. onUnmounted()
- Thời điểm gọi: Sau khi component bị gỡ khỏi DOM hoàn toàn.
- Dùng để: Xác nhận việc huỷ hoặc thực hiện xử lý cuối cùng.
- Ví dụ:
```js
onUnmounted(() => {
  console.log('Component đã bị huỷ.')
})
```

## Sử dụng axios call API

- Cài đặt `axios`:
```bash
npm install axios
```

- Cấu hình `axios`, tại file `src/utils/configAxios.js`:
```js
import axios from 'axios'
const instanceAxios = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json'
  }
})
export default instanceAxios
```



