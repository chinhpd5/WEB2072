<template>
  <div>
    <h1>Cập nhật</h1>
    <form @submit.prevent="hanldeSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Tên sản phẩm</label>
        <input type="text" class="form-control" id="name" v-model="product.name">
        <span class="text-danger" v-show="error.name">{{ error.name }}</span>
      </div>

      <div class="mb-3">
        <label for="price" class="form-label">Giá bán sản phẩm</label>
        <input type="text" class="form-control" id="price" v-model="product.price">
        <span class="text-danger" v-show="error.price">{{ error.price }}</span>
      </div>

      <div class="mb-3">
        <label for="quantity" class="form-label">Số lượng</label>
        <input type="number" class="form-control" id="quantity" v-model="product.quantity">
        <span class="text-danger" v-show="error.quantity">{{ error.quantity }}</span>
      </div>

      <div class="mb-3">
        <label for="imageURL" class="form-label">Hình ảnh</label>
        <input type="text" class="form-control" id="imageURL" v-model="product.imageUrl">
        <span class="text-danger" v-show="error.imageUrl">{{ error.imageUrl }}</span>
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
          <input class="form-check-input" type="checkbox" name="tags" value="samsung" id="samsung"
            v-model="product.tags">
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
        <label for="" class="form-label">Danh mục</label>

        <select class="form-select" v-model="product.category">
          <option value="laptop">Laptop</option>
          <option value="tablet">Tablet</option>
          <option value="mobile">Mobile</option>
        </select>
        <span class="text-danger" v-show="error.category">{{ error.category }}</span>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import instance from '../../utils/configAxios';
import router from '../../router';
import { useRoute } from 'vue-router';

const product = ref({
  tags: []
});

const error = reactive({
  name: null,
  quantity: null,
  price: null,
  imageUrl: null,
  category: null
})

const route = useRoute();
const id = route.params.id;

onMounted(async () => {
  try {
    if (id) {
      const res = await instance.get(`products/${id}`);
      // console.log(res);
      product.value = res.data
    }
  } catch (error) {

  }
})

const validate = () => {
  let isValid = true;

  if (product.value.name == null || product.value.name == '' || product.value.name == undefined || product.value.name.length < 6) {
    isValid = false;
    error.name = "Không được để trống Tên sản phẩm hoặc nhỏ hơn 6 ký tự"
  } else {
    error.name = null;
  }

  if (product.value.quantity == null || product.value.quantity == '' || product.value.quantity == undefined || isNaN(Number(product.value.quantity)) || product.value.quantity < 0) {
    isValid = false;
    error.quantity = "Không được để trống Số lượng hoặc sai định dạng hoặc nhỏ hơn 0"
  } else {
    error.quantity = null;
  }

  if (product.value.price == null || product.value.price == '' || product.value.price == undefined || isNaN(Number(product.value.price)) || product.value.price < 0) {
    isValid = false;
    error.price = "Không được để trống Giá bán hoặc sai định dạng hoặc nhỏ hơn 0"
  } else {
    error.price = null;
  }

  if (product.value.imageUrl == null || product.value.imageUrl == '' || product.value.imageUrl == undefined) {
    isValid = false;
    error.imageUrl = "Không được để trống Hình ảnh"
  } else {
    error.imageUrl = null;
  }

  if (product.value.category == null || product.value.category == '' || product.value.category == undefined) {
    isValid = false;
    error.category = "Không được để trống Danh mục"
  } else {
    error.category = null;
  }

  return isValid;
}

const hanldeSubmit = async () => {
  console.log(error);
  console.log(validate());
  
  if (!validate()) {
    return;
  }

  // console.log(product.value);
  // return;

  try {
    await instance.put(`/products/${id}`, product.value);
    router.push('/admin/product')
  } catch (error) {
    console.log(error);
  }
}
</script>

<style></style>