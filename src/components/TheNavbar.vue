<template>
  <header
    class="d-flex align-items-center justify-content-center bg-white h-70px"
  >
    <nav class="navbar h-70px w-84">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand fs-6 fw-4"
          >Currency Convertor</router-link
        >
        <router-link to="/populateData" class="navbar-brand fs-6 fw-4"
          >Populate Data</router-link
        >
        <router-link to="/registration" class="navbar-brand fs-6 fw-4"
          >Registration Form</router-link
        >
      </div>
    </nav>
  </header>
</template>

<style>
.h-70px {
  height: 70px;
}
.w-84{
  width: 84vw;
}
.navbar-brand.active {
  background-color: #007bff;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 1000px;
}
</style>