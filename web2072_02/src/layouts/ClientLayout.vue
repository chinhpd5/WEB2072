<template>
  <div>
    <header>
      <!-- Menu -->
      <nav
        class="navbar navbar-expand-lg"
        style="background-color: rgb(221, 38, 250)"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">WEB2072.02</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/"
                  ><i class="bi bi-house"></i> Trang chủ</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/product">Sản phẩm</router-link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tài khoản
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Đăng ký</a></li>
                  <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Thông tin tài khoản</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Tin tức</a>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">Liên hệ</router-link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <!-- Banner -->
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div data-bs-interval="2000" class="carousel-item active">
            <img
              style="height: 400px"
              src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/11/tai-hinh-nen-dep-mien-phi-10.jpg.webp"
              class="d-block w-100 object-fit-cover"
              alt="..."
            />
          </div>
          <div data-bs-interval="2000" class="carousel-item">
            <img
              style="height: 400px"
              src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/11/tai-hinh-nen-dep-mien-phi-13.jpg.webp"
              class="d-block w-100 object-fit-cover"
              alt="..."
            />
          </div>
          <div data-bs-interval="2000" class="carousel-item">
            <img
              style="height: 400px"
              src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/11/tai-hinh-nen-dep-mien-phi-14.jpg.webp"
              class="d-block w-100 object-fit-cover"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </header>

    <div class="container">
      <router-view/>
    </div>

    <h1>Footer</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>