<script setup>
import { supabase } from '../../utils/supabase'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const email = ref('')
const username = ref('')
const password = ref('')
const handleRegister = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        username: username.value
      }
    }
  })
  if (error) console.error('Error registering:', error.message)
  else { 
    console.log('User registered:', data.user)
    supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    }).then(({ data, error }) => {
      if (error) console.error('Error logging in after registration:', error.message)
      else {
        console.log('User logged in after registration:', data.user)
        router.replace('/')
      }
    })
  }
}
</script>

<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" placeholder="Unesite e-mail adresu: " required />
      </div>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" placeholder="Unesite korisničko ime: " required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" placeholder="Unesite lozinku: " required />
      </div>
      <button type="submit">Register</button>
      <p>Već imate račun? <router-link to="/login" class="loglink">Prijavite se</router-link></p>
    </form>
  </div>
</template>

<style scoped>
.register {
  max-width: 100%;
  padding: 20px;
  border-radius: 5px;
  background-color: #3b2d2d;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-family: Georgia, 'Times New Roman', Times, serif;
}   
h1 {
    color:#b49999;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 2.3rem;
    margin-bottom: 5%;
}
form {
  display: flex;
  flex-direction: column;
  width: 90%;
  border: 2px solid #9f6969;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 2%;
}
.form-group {
  width: 100%;
  margin-bottom: 3%;
  margin-top: 2%;
  padding: auto;
}
label {
  display: flex;
  color:#b49999;
  align-items: flex-start;
  margin-left: 30%;
}
input {
  width: 40%;
  padding: 8px;
  display: block;
  box-sizing: border-box;
  border-color: #3b2d2d;
  border-radius: 5px;
  background-color: #9f6969;
  color: #3b2d2d;
  margin-left: 30%;
  margin-top: auto;
}

input::after {
    background-color: #9f6969;
    color: #3b2d2d;
    border-color: #3b2d2d;
    border-radius: 5px;
}
input::placeholder {
  color: #3b2d2d;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
button {
  width: 30%;
  padding: 10px;
  background-color: #7b4f4f;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: rgb(203, 176, 176);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 5%;
}
button:hover {
  box-shadow: 0 8px 20px rgba(32, 14, 14, 0.3);
  transform: translateY(-2px);
}
p {
    color: #b49999;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 0.8rem;
    align-self: flex-end;
    margin-bottom: 2%;
    margin-right: 5%;
}
.loglink {
    color: #b49999;
    text-decoration: none;
}
.loglink:hover {
    text-decoration: underline;
    color: #d6afaf;
}
</style>