# Lab: Thực hành CRUD với book

- Xây dựng theo `Model`:
```js
title: string, min:6, required
views: number, min:0, required
isPublish: boolean, input-radio, required
imageUrl: string, required
category: string, select-option
```

- Thêm `Data` vào `db.json`:
```json
"books": [
    {
      "id": "1",
      "title": "The Art of Coding",
      "views": 120,
      "isPublish": true,
      "imageUrl": "https://example.com/images/art-of-coding.jpg",
      "category": "Technology"
    },
    {
      "id": "2",
      "title": "Mastering UX Design",
      "views": 85,
      "isPublish": false,
      "imageUrl": "https://example.com/images/ux-design.jpg",
      "category": "Design"
    },
    {
      "id": "3",
      "title": "Agile Project Guide",
      "views": 200,
      "isPublish": true,
      "imageUrl": "https://example.com/images/agile-guide.jpg",
      "category": "Management"
    }
]
```

- Tạo `Router` cho `books`:
+ Danh sách: `/admin/books`
+ Thêm mới: `/admin/books/add`
+ Chi tiết: `/admin/books/detail/:id`
+ Cập nhật: `/admin/books/update/:id`

- Thực hành CRUD với books