<script setup>   
import Button from '../components/Button.vue'
import Header from '../components/Header.vue'
import NarudzbeLista from '../components/NarudzbeLista.vue'
import Footer from '../components/Footer.vue';
import { useRouter } from 'vue-router'
import { supabase } from '../../utils/supabase'
const router = useRouter();
const logOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) console.error('Error logging out:', error.message)
  else {
    console.log('User logged out')
    router.replace('/login')
  }
}
</script>

<template>
  <div class="home-page">
    <Header />
    <div class="mainScreen">
    <NarudzbeLista />
    <Button variant="clear" @click="() => console.log('Prethodna stranica')">Prethodna stranica</Button>
    <Button variant="clear" @click="() => console.log('Sljedeća stranica')">Sljedeća stranica</Button>
    <Button class="logoutbtn" @click="logOut()">Log Out</Button>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
}
.mainScreen {
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 20px;
  border: 2px solid #6b4f4f;
  border-radius: 1%;
  width: 90%;
  margin-left: 5%;
  box-sizing: border-box; 
  background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('images/slika1.jpg');
  background-size: cover;
  justify-content: center;
  align-items: center;
}
Button:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}
.logoutbtn {
  position: relative;
  margin-bottom: auto;
  margin-left: 80%;
  font-size: large;
}
</style>