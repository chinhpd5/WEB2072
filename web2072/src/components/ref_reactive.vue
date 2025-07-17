<script setup>
import {ref,reactive} from 'vue'

// const name = "chinhpd5";
// const age= 20;
// const gender = true;

const count = ref(0); // có thể sử dụng với tất cả các kiểu dữ liệu
let info = reactive({ // chỉ sử dụng với array và object
  name: "chinhpd5",
  age: 20,
  gender: true
})
// sử dụng ul li hiển thị mảng myArray
const myArray = reactive(["Hùng", "Long", "Bình"])

const handleChange = () => {
  info.name = "xin chào chinhpd5"

  // Không thể gán 1 giá trị mới cho reactive
  // info = { 
  //   name: "chinhpd5 new",
  //   age: 20,
  //   gender: true
  // } 
}

const handleIncrease = () => {
  count.value++;
  // console.log(count.value);
}

const handleDecrease =  () => {
  count.value--;
}

const handleReset = () => {
  count.value = 0;
}
</script>

<template>
  <div>
    <h1 class="text-danger">Họ và tên: {{ info.name }}</h1>
    <h2>Tuổi: {{ info.age }}</h2>
    <h3>Giới tính: {{ info.gender ? "Nam": "Nữ" }}</h3>
    <button class="btn btn-info" @click="handleChange">Change</button>
    <hr>
    <div>
      <h1>{{ count }}</h1>
      <button @click="handleIncrease" class="btn btn-success">Tăng</button>
      <button @click="handleDecrease" class="btn btn-danger">Giảm</button>
      <button @click="handleReset" class="btn btn-warning">Reset</button>
    </div>
    <hr>
    <ul>
      <li>{{ myArray[0] }}</li>
      <li>{{ myArray[1] }}</li>
      <li>{{ myArray[2] }}</li>
    </ul>
  </div>
</template>

<style scoped>
/* scoped khai phạm css chỉ thỏa mãn trong file vue hiện tại */
</style>
