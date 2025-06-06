<template>
  <div>
    <h1>Cập nhật sản phẩm</h1>
    <form @submit.prevent="handleSubmit()">
      <div class="mb-3">
        <label for="name" class="form-label">Tên sản phẩm</label>
        <input type="text" class="form-control" id="name" v-model="product.name" />
        <span class="text-danger" v-show="errors.name">{{ errors.name }}</span>
      </div>

      <div class="mb-3">
        <label for="description" class="form-label">Mô tả sản phẩm</label>
        <textarea class="form-control" id="description" rows="3" v-model="product.description"></textarea>
      </div>

      <div class="mb-3">
        <label for="price" class="form-label">Giá bán sản phẩm</label>
        <input type="number" class="form-control" id="price" v-model="product.price" />
        <span class="text-danger" v-show="errors.price">{{ errors.price }}</span>
      </div>

      <div class="mb-3">
        <label for="quantity" class="form-label">Số lượng sản phẩm</label>
        <input type="number" class="form-control" id="quantity" v-model="product.quantity" />
        <span class="text-danger" v-show="errors.quantity">{{ errors.quantity }}</span>
      </div>

      <div class="mb-3">
        <label class="form-label">Trạng thái</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="isVisible"
            id="active"
            v-model="product.isVisible"
            :value="true"
          />
          <label class="form-check-label" for="active"> Kích hoạt </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="isVisible"
            id="notActive"
            v-model="product.isVisible"
            :value="false"
          />
          <label class="form-check-label" for="notActive"> Ẩn </label>
        </div>
        <span class="text-danger" v-show="errors.isVisible">{{ errors.isVisible }}</span>
      </div>

      <div class="mb-3">
        <label class="form-label">Danh mục sản phẩm</label>
        <select class="form-select" v-model="product.category">
          <option value="Laptop">Laptop</option>
          <option value="Mobile">Điện thoại</option>
          <option value="Tablet">Máy tính bảng</option>
        </select>
        <span class="text-danger" v-show="errors.category">{{ errors.category }}</span>
      </div>

      <div class="mb-3">
        <label for="imageUrl" class="form-label">Hình ảnh</label>
        <input type="text" class="form-control" id="imageUrl" v-model="product.imageUrl" />
        <span class="text-danger" v-show="errors.imageUrl">{{ errors.imageUrl }}</span>
      </div>

      <div class="mb-3">
        <label class="form-label">Tags</label>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" name="tags" v-model="product.tags" value="apple" id="apple">
          <label class="form-check-label" for="apple">
            apple
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" name="tags" v-model="product.tags" value="m1" id="m1">
          <label class="form-check-label" for="m1">
            m1
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" name="tags" v-model="product.tags" value="developer" id="developer">
          <label class="form-check-label" for="developer">
            developer
          </label>
        </div>
      </div>


      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup>

import { useRoute } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';
import instanceAxios from '../../utils/configAxios';
import router from '../../router';

const route = useRoute();
const id = route.params.id;
// console.log(id);

const product = ref({
  name: '',
  description: '',
  price: null,
  isVisible: null,
  category: '',
  imageUrl: '',
  tags: [],
  quantity: null
})

const errors = reactive({
  name: null,
  // description: null,
  price: null,
  isVisible: null,
  category: null,
  imageUrl: null,
  // tags: null,
  quantity: null
})

const validate = () =>{
  let isValid = true;

  if(!product.value.name.trim()){
    isValid = false
    errors.name = "Tên sản phẩm là bắt buộc"
  }else{
    errors.name = null
  }
  

  if(product.value.price == null || product.value.price == undefined || isNaN(product.value.price) || Number(product.value.price) < 0){
    isValid= false;
    errors.price = "Giá bán là bắt buộc hoặc cần kiểu số hoặc lớn hơn 0"
  }else{
    errors.price = null
  }

  if(product.value.quantity == null || product.value.quantity == undefined || isNaN(product.value.quantity) || Number(product.value.quantity) < 0){
    isValid= false;
    errors.quantity = "Số lượng là bắt buộc hoặc cần kiểu số hoặc lớn hơn 0"
  }else{
    errors.quantity = null
  }

  if(!product.value.category.trim()){
    isValid = false
    errors.category = "Danh mục sản phẩm là bắt buộc"
  }else{
    errors.category = null
  }

  if(!product.value.imageUrl.trim()){
    isValid = false
    errors.imageUrl = "Hình ảnh sản phẩm là bắt buộc"
  }else{
    errors.imageUrl = null
  }

  if(product.value.isVisible == null || product.value.isVisible == undefined){
    isValid= false;
    errors.isVisible = "Trạng thái là bắt buộc"
  }else{
    errors.isVisible = null
  }

  return isValid
}

const handleSubmit = async () =>{
  // console.log(product.value);
  try {
    if(!validate()){
      return
    }

    // cập nhật
    await instanceAxios.put(`/products/${id}`, product.value)
    alert("Cập nhật thành công");
    router.push('/admin/product')
  } catch (error) {
    console.log(error);
  }

}

const getProductBy = async () =>{
  try {
    const res = await instanceAxios.get(`/products/${id}`)
    product.value = res.data
  } catch (error) {
    console.log(error);
  }
}

onMounted(()=>{
  getProductBy()
})
</script>

<style>

</style>