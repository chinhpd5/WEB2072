<template>
  <div>
    <h1>Thêm mới</h1>
    <form @submit.prevent="hanldeSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Tên sản phẩm</label>
        <input type="text" class="form-control" id="name" v-model="product.name">
      </div>

      <div class="mb-3">
        <label for="price" class="form-label">Giá bán sản phẩm</label>
        <input type="number" class="form-control" id="price" v-model="product.price">
      </div>

      <div class="mb-3">
        <label for="quantity" class="form-label">Số lượng</label>
        <input type="number" class="form-control" id="quantity" v-model="product.quantity">
      </div>

      <div class="mb-3">
        <label for="imageURL" class="form-label">Hình ảnh</label>
        <input type="text" class="form-control" id="imageURL" v-model="product.imageUrl">
      </div>

      <div class="mb-3">
        <label for="" class="form-label">Tags</label>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" name="tags" value="apple" id="apple" v-model="product.tags">
          <label class="form-check-label" for="apple">
            Apple
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" name="tags" value="samsung" id="samsung" v-model="product.tags">
          <label class="form-check-label" for="samsung">
            Samsung
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" name="tags" value="oppo" id="Oppo" v-model="product.tags">
          <label class="form-check-label" for="Oppo">
            Oppo
          </label>
        </div>
      </div>

      <div class="mb-3">
        <label for="" class="form-label">Tags</label>

        <select class="form-select" v-model="product.category">
          <option value="laptop">Laptop</option>
          <option value="tablet">Tablet</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import instance from '../../utils/configAxios';
import router from '../../router';

const product = ref({
  tags: []
});

const hanldeSubmit = async () =>{
  // console.log(product.value);
  try {
    await instance.post(`/products`,product.value);
    router.push('/admin/product')
  } catch (error) {
    console.log(error);
  }
}
</script>

<style></style>