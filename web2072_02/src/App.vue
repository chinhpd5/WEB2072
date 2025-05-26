<script setup>
  import { ref } from 'vue'; 
  import Product from './components/Product.vue';

  const products = [
  {
    id: 1,
    name: 'Laptop Acer Aspire 7',
    description: 'Laptop gaming giá rẻ cho sinh viên.',
    price: 15000000,
    inStock: true,
    isVisible: true,
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
    isVisible: true,
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
    isVisible: false,
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
    isVisible: true,
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
    isVisible: false,
    category: 'Laptop',
    rating: 3.9,
    imageUrl: 'https://cdn.hoanghamobile.com/i/previewV2/Uploads/2024/07/11/lenovo-loq-15iax9-83fq0005vn-1.png',
    tags: ['basic', 'student'],
    quantity: 0,
    featured: false
  },
  ];


  const text = ref('');
  const message = ref('')

  const handleKey = (event) => {
    // console.log(event.key);
    // if(event.key == 'Enter'){
    //   message.value = text.value
    // }
  }
  
  const showMessage = () =>{
    message.value = text.value
  }

  const product = ref({
    tags: []
  })

  const handleSubmit = () =>{
    // console.log("submit!!!");
    console.log(product.value);
    
  }
</script>

<template>
  <div>
    <Product 
      v-for="item in products"
      :key="item.id"
      :name="item.name" 
      :price="item.price" 
      :description="item.description" 
    />

    <div>
      <!-- Sự kiện với bàn phím -->
      <input type="text" @keydown="handleKey" @keydown.enter="showMessage" v-model="text">
      <h1>Text: {{ message }}</h1>
    </div>

    <div class="container">
      <!-- Sự kiện với form -->
       <form @submit.prevent="handleSubmit">

        <div class="mb-3">
          <label for="id" class="form-label">ID</label>
          <input type="number" class="form-control" id="id" v-model="product.id" >
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">Tên sản phẩm</label>
          <input type="text" class="form-control" id="name" v-model="product.name" >
        </div>

        <div class="mb-3">
          <label for="descripton" class="form-label">Mô tả</label>
          <textarea class="form-control" id="descripton" rows="3" v-model="product.description"></textarea>
        </div>

        <div class="mb-3">
          <label for="price" class="form-label">Giá</label>
          <input type="number" class="form-control" id="price" v-model="product.price" >
        </div>

        <div class="mb-3">
          <label for="quantity" class="form-label">Số lượng</label>
          <input type="number" class="form-control" id="quantity" v-model="product.quantity" >
        </div>

        <div class="mb-3">
          <label for="" class="form-label">Trạng thái</label>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="isVisible" v-model="product.isVisible" :value="true" id="active">
            <label class="form-check-label" for="active">
              Kích hoạt
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="isVisible" v-model="product.isVisible" :value="false" id="notActive">
            <label class="form-check-label" for="notActive">
              Không kích hoạt
            </label>
          </div>

        </div>

        <div class="mb-3">
          <label for="" class="form-label">Danh mục</label>
          <select class="form-select" v-model="product.category">
            <option value="laptop">Laptop</option>
            <option value="mobile">Điện thoại</option>
            <option value="tablet">Máy tính bảng</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="image" class="form-label">Hình ảnh</label>
          <input type="text" class="form-control" id="image" v-model="product.image" >
        </div>

        <div class="mb-3">
          <label for="" class="form-label">Tags</label>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="product.tags" value="gaming" id="gaming">
            <label class="form-check-label" for="gaming">
              Gaming
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="product.tags" value="student" id="student">
            <label class="form-check-label" for="student">
              Student
            </label>
          </div>
           <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="product.tags" value="budget" id="budget">
            <label class="form-check-label" for="budget">
              Budget
            </label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>


    <div>
      <h1>Danh sách sản phẩm:</h1>
    </div>
  </div>
</template>

<style scoped></style>
