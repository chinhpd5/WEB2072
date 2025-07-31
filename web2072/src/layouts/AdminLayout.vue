<template>
  <div id="container">
    <div class="sidebar d-flex flex-column p-3">
      <h4 class="text-white mb-4">Admin Panel</h4>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" aria-current="page">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/" class="nav-link">Quản lý người dùng</router-link>
        </li>
        <li>
          <router-link to="/admin/product" class="nav-link">Sản phẩm</router-link>
        </li>
        <li>
          <router-link to="#" class="nav-link">Đơn hàng</router-link>
        </li>
        <li>
          <router-link to="#" class="nav-link">Cài đặt</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
#container {
  display: flex;
}

.sidebar {
  position: sticky;
  top: 0;
  width: 250px;
  background-color: #343a40;
  color: #fff;
  flex-shrink: 0;
  height: 100vh;
}

.sidebar .nav-link {
  color: #fff;
}

.content {
  flex-grow: 1;
  padding: 20px;
}
</style>
