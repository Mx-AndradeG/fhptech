<template>
    <body>
        <div class="container">
            <div class="login__content">
                <!-- <img src="assets/img/login.png" alt="login image" class="login__img"> -->
                <alv-form
                    id="alv"
                    ref="form"
                    :action="alvRoute"
                    :method="alvMethod"
                    @after-done="afterDone"
                    @after-error="afterError"
                    :data-object="item"
                >
                    <div>
                        <div class="nav__buttons">
                            <a class="login__user-link">
                                <i class="ri-arrow-go-back-fill"></i>
                            </a>
                    </div>
                        <h1 class="login__title">
                            <span>Registro</span>                   
                        </h1>     
                    </div>
                    <div>
                        <div class="login__inputs">
                            <div>
                                <label for="" class="login__label">Nombre completo</label>
                                <input type="text" placeholder="Introduce tú nombre" required class="login__input" v-model="item.name">
                            </div>
                            <div>
                                <label for="" class="login__label">Teléfono</label>
                                <input type="number" placeholder="Introduce tú número telefónico" required class="login__input" v-model="item.phone" >
                            </div>
                            <div>
                                <label for="" class="login__label">Correo</label>
                                <input type="email" placeholder="Introduce tú correo electrónico" required class="login__input" v-model="item.email">
                            </div>
                            <div>
                                <label for="" class="login__label">Contraseña</label>
                                <div class="login__box">
                                    <input type="password" placeholder="Introduce una contraseña" required class="login__input" id="input-pass" v-model="item.password" >
                                    <i class="ri-eye-off-line login__eye" id="input-icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="login__buttons">
                            <button class="login__button login__button-ghost" type="submit" form="alv">Registrarse</button>
                        </div>
                    </div>
                </alv-form>
            </div>
        </div>
    </body>
</template>
<script>

export default {
  name: 'Register component',
  data: () => ({
    item:{
        email:'',
        password:'',
        name:'',
        phone:'',
    },
    alvRoute: route("user.store"),
    alvmethod:'POST'
  }),
  methods:{
    afterDone(){
        alert('Se creo exitosamente')
    },
    afterError(e){
      alert(e.message)
    },
  }
}
</script>