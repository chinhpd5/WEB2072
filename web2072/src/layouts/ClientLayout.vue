<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg " style="background-color: #ff89f5;" data-bs-theme="light">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">WEB2072.04</router-link>
          <button class="navbar-toggler" type="button"
            data-bs-toggle="mb-5 col-xl-3 col-md-4 col-sm-6 d-flex justify-content-centerlapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/"><i class="bi bi-house"></i> Trang chủ</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/product"><i class="bi bi-bag"></i> Sản phẩm</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Tài khoản
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Đăng ký</a></li>
                  <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Đăng xuất</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link">Liên hệ</a>
              </li>
            </ul>
            <div>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Tìm kiếm" />
                <button class="btn btn-outline-success" style="width: 150px;" type="submit">
                  Tìm kiếm
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
    
    <div class="container">
      <router-view />
    </div>

    <h1>Client Footer</h1>
  </div>
</template>

<script setup>

</script>

<style></style>