<template>
  <main class="registration-form">
    <div class="main-container bg-white py-5 px-5 rounded-4 w-50">
      <h1>Registration Form</h1>
      <form class="row g-3 mt-4" @submit.prevent="submitForm">
        <!-- Name field -->
        <div class="col-md-6">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" v-model="name" />
        </div>

        <!-- Email field -->
        <div class="col-md-6">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="email" />
        </div>

        <!-- Password field -->
        <div class="col-md-5">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" />
        </div>

        <!-- Phone No field -->
        <div class="col-md-4">
          <label for="phoneNo" class="form-label">Phone No</label>
          <input type="number" class="form-control" id="phoneNo" v-model="phoneNo" />
        </div>

        <!-- Age field -->
        <div class="col-md-3">
          <label for="age" class="form-label">Age</label>
          <input type="number" class="form-control" id="age" v-model="age" />
        </div>

        <!-- Branch field -->
        <div class="col-md-4">
          <label for="branch" class="form-label">Branch</label>
          <select id="branch" class="form-select" v-model="branch">
            <option selected value="">Choose...</option>
            <option value="computer">Computer</option>
            <option value="e&tc">E&Tc</option>
            <option value="electronics">Electronics</option>
            <option value="mechanical">Mechanical</option>
            <option value="civil">Civil</option>
          </select>
        </div>

        <!-- Gender field -->
        <div class="col-md-6 mx-2">
          <label class="form-label">Gender</label>
          <div class="d-flex justify-content-between mt-2">
            <div class="form-check">
              <input type="radio" id="male" name="gender" value="male" class="form-check-input" v-model="gender" />
              <label for="male" class="form-check-label">Male</label>
            </div>
            <div class="form-check">
              <input type="radio" id="female" name="gender" value="female" class="form-check-input" v-model="gender" />
              <label for="female" class="form-check-label">Female</label>
            </div>
            <div class="form-check">
              <input type="radio" id="other" name="gender" value="other" class="form-check-input" v-model="gender" />
              <label for="other" class="form-check-label">Other</label>
            </div>
          </div>
        </div>

        <!-- Interests field -->
        <div class="col-md">
          <label class="form-label">Interests</label>
          <div class="d-flex justify-content-start" style="gap: 3rem">
            <div class="form-check">
              <input id="interest-uiux" name="interest" value="ui/ux" type="checkbox" v-model="interest" />
              <label for="interest-uiux">UI/UX</label>
            </div>
            <div class="form-check">
              <input id="interest-java" name="interest" value="java" type="checkbox" v-model="interest" />
              <label for="interest-java">Java</label>
            </div>
            <div class="form-check">
              <input id="interest-mern" name="interest" value="mern-stack" type="checkbox" v-model="interest" />
              <label for="interest-mern">MERN Stack</label>
            </div>
          </div>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary px-5 py-2 mt-3">Submit</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      phoneNo: null,
      age: null,
      branch: "",
      gender: null,
      interest: [],
      formData: {},
    };
  },
  methods: {
    submitForm() {
      
      this.formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        phoneNo: this.phoneNo,
        age: this.age,
        branch: this.branch,
        gender: this.gender,
        interest: this.interest,
      };
      
      // console.log(this.formData);
      const data = `Name: ${this.name}, email: ${this.email}, password: ${this.password}, phone no: ${this.phoneNo}, age: ${this.age}, branch: ${this.branch}, gender: ${this.gender}, interest: ${this.interest}`;

      alert(data);
      
      this.name = "";
      this.email = "";
      this.password = "";
      this.phoneNo = null;
      this.age = null;
      this.branch = "";
      this.gender = null;
      this.interest = [];
    },
  },
};
</script>

<style scoped>
.registration-form {
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-container {
  background-color: white !important;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}
</style>
