<template>
  <div>
    <h1>Đăng ký</h1>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="auth.email"
        />
        <span v-show="errors.email" class="text-danger">{{ errors.email }}</span>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="auth.password"
        />
        <span v-show="errors.password" class="text-danger">{{ errors.password }}</span>
      </div>
     
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import instanceAxios from "../utils/configAxios";
import router from "../router";

const auth = ref({
  email: "",
  password: ""
})

const errors = reactive({
  email: null,
  password: null
})

const validate = () =>{
  let isValid = true;
  const regexEmail = /^\S+@\S+\.\S+$/

  if(!auth.value.email.trim()){
    console.log(1);
    
    isValid = false;
    errors.email = "Email là bắt buộc"
    
  }else if(auth.value.email.trim() && !regexEmail.test(auth.value.email.trim())){
    isValid = false;
    errors.email = "Sai định dạng email"
  }else{
    console.log(3333);
    
    errors.email = null
  }

  if(!auth.value.password.trim() || auth.value.password.trim().length < 6){
    isValid = false;
    errors.password ="Password cần tối thiểu 6 ký tự"
  }else{
    errors.password = null
  }

  return isValid;
}

const handleSubmit = async () =>{
  try {
    if(!validate()){
      return;
    }
    await instanceAxios.post('/register',auth.value);
    router.push('/login')
  } catch (error) {
    alert(error.response.data)
    console.log(error);
  }
}

</script>

<style></style>
