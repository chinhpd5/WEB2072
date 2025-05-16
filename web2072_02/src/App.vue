<script setup>
import { reactive, ref } from "vue";

// ref: number, string, boolean
const name = ref("chinhpd5");
const count = ref(0);

const increaseCount = () => {
  count.value += 1;
};

// reactive : object, array
const myInfo = reactive({
  name: "Phí Đức Chính",
  age: 20,
  gender: false,
});

const students = reactive([
  {
    id: 1,
    name: "Nguyễn Văn An",
    gender: true,
    gpa: 3.5,
    major: "Computer Science",
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    gender: false,
    gpa: 3.8,
    major: "Information Systems",
  },
  {
    id: 3,
    name: "Lê Minh Dũng",
    gender: true,
    gpa: 3.2,
    major: "Software Engineering",
  },
  {
    id: 4,
    name: "Phạm Ngọc Hân",
    gender: false,
    gpa: 3.9,
    major: "Data Science",
  },
  {
    id: 5,
    name: "Hoàng Trung Kiên",
    gender: true,
    gpa: 2.9,
    major: "Cybersecurity",
  },
]);
</script>

<template>
  <div>
    <!-- ref -->
    <h1>Họ và tên: {{ name }}</h1>
    <h1>Count: {{ count }}</h1>
    <button @click="increaseCount" class="btn btn-primary">Tăng</button>
    <!-- reactive -->
    <h1>Họ và tên: {{ myInfo.name }}</h1>
    <h2>Tuổi: {{ myInfo.age }}</h2>
    <h2>Giới tính: {{ myInfo.gender ? "Nam" : "Nữ" }}</h2>

    <!-- table -->
    <h1>Danh sách student</h1>

    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Tên</th>
          <th scope="col">Giới tính</th>
          <th scope="col">Điểm</th>
          <th scope="col">Khoa</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ students[0].id }}</th>
          <td>{{ students[0].name }}</td>
          <td>{{ students[0].gender }}</td>
          <td>{{ students[0].gpa }}</td>
          <td> {{ students[0].major }}</td>
        </tr>
        <tr>
          <th scope="row">{{ students[1].id }}</th>
          <td>{{ students[1].name }}</td>
          <td>{{ students[1].gender }}</td>
          <td>{{ students[1].gpa }}</td>
          <td> {{ students[1].major }}</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
