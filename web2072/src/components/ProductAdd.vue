<template>
  <div class="container">
    <h1>Thêm mới sản phẩm</h1>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="id" class="form-label">ID</label>
        <input type="number" class="form-control" id="id" v-model="product.id">
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">Tên sản phẩm</label>
        <input type="text" class="form-control" id="name" v-model="product.name">
      </div>

      <div class="mb-3">
        <label for="imageUrl" class="form-label">Hình ảnh</label>
        <input type="text" class="form-control" id="imageUrl" v-model="product.imageUrl">
      </div>

      <div class="mb-3">
        <label for="price" class="form-label">Giá bán</label>
        <input type="number" class="form-control" id="price" v-model="product.price">
      </div>

      <div class="mb-3">
        <label for="" class="form-label">Trạng thái</label>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="inStock" id="inStock" :value="true"
            v-model="product.inStock">
          <label class="form-check-label" for="inStock">
            Còn hàng
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="inStock" id="outStock" :value="false"
            v-model="product.inStock">
          <label class="form-check-label" for="outStock">
            Hết hàng
          </label>
        </div>
      </div>

      <div class="mb-3">
        <label for="quantity" class="form-label">Số lượng</label>
        <input type="number" class="form-control" id="quantity" v-model="product.quantity" :disabled="!product.inStock">
      </div>

      <div class="mb-3">
        <label for="" class="form-label">Tags</label>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="Apple" id="Apple" v-model="product.tags">
          <label class="form-check-label" for="Apple">
            Apple
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="SamSung" id="SamSung" v-model="product.tags">
          <label class="form-check-label" for="SamSung">
            SamSung
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="Sony" id="Sony" v-model="product.tags">
          <label class="form-check-label" for="Sony">
            Sony
          </label>
        </div>
      </div>

      <div class="mb-3">
        <label for="" class="form-label">Danh mục</label>
        <select class="form-select" v-model="product.category">
          <option value="Laptop">Laptop</option>
          <option value="Mobile">Mobile</option>
          <option value="Tablet">Tablet</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="description" class="form-label">Mô tả</label>
        <textarea class="form-control" id="description" rows="3" v-model="product.description"></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['add']);

const product = ref({
  // name: "abc"
  // inStock: true
  tags: []
})

const handleSubmit = () => {
  // console.log(product.value);
  emit('add', product.value)

  product.value = {
    name: '',
    imageUrl: '',
    price: null,
    
  }
}
</script>

<style></style>