<template>
        <body>
        <div class="container">
            <div class="login__content">
                <!-- <img src="assets/img/login.png" alt="login image" class="login__img"> -->
                <form class="login__form" >
                    <div>
                        <div class="nav__buttons">
                            <a class="login__user-link">
                                <i class="ri-arrow-go-back-fill"></i>
                            </a>
                    </div>
                        <h1 class="login__title">
                            <span>¡Bienvenido</span> de nuevo!                      
                        </h1>
                        <p class="login__description">
                            Por favor inicia sesión para continuar.
                        </p>       
                    </div>
                    <div>
                        <div class="login__inputs">
                            <div>
                                <label for="" class="login__label" >Usuario</label>
                                <input type="text" placeholder="Introduce tu usuario" required class="login__input" v-model="user.email">
                            </div>
                            <div>
                                <label for="" class="login__label" >Contraseña</label>
                                <div class="login__box">
                                    <input type="password" placeholder="Introduce tu contraseña" required class="login__input" id="input-pass" v-model="user.pass">
                                    <i class="ri-eye-off-line login__eye" id="input-icon"></i>
                                </div>
                            </div>
                        </div>
                        <div class="login__check">
                            <input type="checkbox" class="login__check-input">
                            <label for="" class="login__check-label">Recuérdame</label>
                        </div>
                    </div>
                    <div>
                        <div class="login__buttons">
                            <button class="login__button" @click="paseAlgo">Iniciar sesión</button>
                        </div>
                        <a href="register.php" class="login__forgot">¿No tienes una cuenta?</a>
                    </div>
                </form>
                <alv-form
                    id="alv"
                    ref="form"
                    :action="alvRoute"
                    :method="alvMethod"
                    @after-done="afterDone"
                    :data-object="item"
                >

                </alv-form>
            </div>
        </div>
    </body>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'Login component',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data: () => ({
    user:{
        email:'',
        pass:''
    },
    alvRoute:'',
    alvmethod:''
  }),
  methods:{
    paseAlgo(){
       alert('pase algo'); 
    }
  },
  mounted() {
    this.alvmethod = 'POST'; 
  }
}
</script>
