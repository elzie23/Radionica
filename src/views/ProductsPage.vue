<script setup>   
import Button from '../components/Button.vue'
import Header from '../components/Header.vue'
import NarudzbeLista from '../components/NarudzbeLista.vue'
import Footer from '../components/Footer.vue'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { supabase } from '../../utils/supabase'

const router = useRouter();

const goToContactPage = () => {
  router.replace('/contact')
}

const products = ref([])

async function dohvatiProizvode() {
  const { data, error } = await supabase
    .from('proizvodi')
    .select('naziv, cijena')

  if (error) {
    console.error(error.message)
    return
  }

  console.log(data)

  data.forEach((proizvod) => {
    console.log(proizvod.naziv)
  })

  products.value = data
}

onMounted(() => {
  dohvatiProizvode()
})
</script>

<template>
  <div class="home-page">
    <Header />
    <div class="mainScreen">
      <div class="proizvodi">
        <p>Products Page</p>
        <p>Our products:</p>
           <div class="product" v-for="product in products" :key="product.naziv">
            <p>{{ product.naziv }}</p>
            <p>{{ product.cijena }} KM</p>
           </div>
        </div>
        <Button @click="goToContactPage" variant="clear" class="btn-dolje">Contact us</Button>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
}
.proizvodi {
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  gap: 20px;
  justify-content: left;
}
.product {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 4%;
  box-shadow: #3b2d2d 2px 2px 5px;
  display: flex;
  flex-direction: row;
  gap: 40px;
}
@media (max-width: 768px) {
  .proizvodi {
    width: 90%;
    margin-left: 5%;
    align-items: center;
    height: 65vh;
    gap: 10px;
  }
  .product {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 20%;
    gap: 10px;
  }
  .mainScreen {
    height: 75vh !important;
    background-size: cover;
    background-position: center;
  }
  Button {
    margin-left: 50% !important;
    transform: translateX(-50%);
    margin-bottom: 1%;
  }

}
.mainScreen {
  margin-top: 5%;
  padding: 20px;
  border: 2px solid #6b4f4f;
  border-radius: 4%;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 60vh;
  margin-left: 5%;
  background-image: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url('images/slika1.jpg');
  background-size: cover;
}
.proizvodi p {
  font-size: 1.5rem;
  color: #d6afaf;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  text-align: left;
  margin-top: 5%;
  text-shadow: #3b2d2d 2px 2px 1px;
}
Button {
  display: block;
  margin-bottom: 10%;
  width: 150px;
  height: 40px;
}
.btn-dolje {
  margin-top: 0;
  display: block;
  position: relative;
  left:auto;
  right: 0;
  margin-bottom: 10%;
  margin-left: 85%;
}
.btn-dolje:hover {
  background-color: #a17e7e;
  color: white;
  box-shadow: #3b2d2d 2px 2px 5px;
  border: none;
}
</style>