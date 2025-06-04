<template>
  <div class="main">
    <!-- Sidebar -->
    <div class="sidebar d-flex flex-column p-3">
      <h4 class="text-white text-center">Quản Trị</h4>
      <hr class="text-white" />
      <a href="#" class="active">🏠 Trang chủ</a>
      <a href="#">👥 Người dùng</a>
      <router-link to="/admin/product">📦 Sản phẩm</router-link>
      <a href="#">🧾 Đơn hàng</a>
      <a href="#">📊 Báo cáo</a>
      <a href="#" class="mt-auto text-danger">🚪 Đăng xuất</a>
    </div>

    <!-- Main Content -->
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  min-height: 100vh;
  display: flex;
}
.sidebar {
  width: 250px;
  background-color: #343a40;
  color: white;
  flex-shrink: 0;
}
.sidebar a {
  color: white;
  padding: 15px;
  display: block;
  text-decoration: none;
}
.sidebar a:hover,
.sidebar .active {
  background-color: #495057;
}
.content {
  flex-grow: 1;
  padding: 20px;
  background-color: #f8f9fa;
}
</style>
