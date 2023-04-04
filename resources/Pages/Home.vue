<template>
    <body>      
        <div id="page" class="site">
            <!--=============== For dispositives mobiles===============-->
            <aside class="site-off desktop-hide">
                <div class="off-canvas">
                    <div class="canvas-head flexitem">
                        <div class="logo"><a href="/"><span class="circle"></span>FHPTECH</a></div>
                        <a href="#" class="t-close flexcenter"><i class="ri-close-line"></i></a>
                    </div> 
                    <div class="departments"></div>
                    <nav></nav>
                    <div class="thetop-nav"></div>
                </div>
            </aside>
            <!--=============== Header ===============-->
            <Header></Header>
            <!--=============== Main ===============-->
            <main class="main">
                <!--=============== Slider ===============-->
                <div class="slider">
                    <div class="container">
                        <div class="wrapper">
                            <div class="myslider swiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="item">
                                            <div class="image object-cover">
                                                <img src="../img/banner1.png" alt="">
                                            </div>
                                            <div class="text-content flexcol">
                                                <h4>Lorem impsum</h4>
                                                <h2><span>SLIDE 1</span><br><span></span>Lorem ipsum</h2>
                                                <a href="" class="primary-button">Lorem ipsum</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--=============== Second Anuncio ===============-->
                <div class="container">
                    <section class="home">                
                        <div class="home__shape-small"></div>
                        <div class="home__shape-big-1"></div>  
                        <!-- <div class="home__shape-big-2"></div>  -->     
                        <div class="home__container container">
                            <div class="home__info">
                                <h1 class="home__title">
                                    <span>Descubre</span> <br>
                                    Ensambles, y <br>
                                    Componentes.
                                </h1>
                                <p class="home__description">
                                    Explora los mejores precios del mercado tecnologico.
                                </p>
                                <a href="#" class="home__button">EXPLORAR</a>
                            </div>
        
                            <div class="home__group">
                                <div class="home__images">
                                    <div class="home__img-eth">
                                        <img src="../img/index_principal.png" alt="home image">
                                    </div>
                                    <div class="home__img-orbe">
                                        <img src="../img/orbe-img.png" alt="home image">
                                    </div>
                                </div>
        
                                <div class="home__data">
                                    <div>
                                        <h2 class="home__data-number">26K+</h2>
                                        <span class="home__data-subtitle">PEDIDOS</span>
                                    </div>
                                    <div>
                                        <h2 class="home__data-number">18K</h2>
                                        <span class="home__data-subtitle">VENTAS</span>
                                    </div>
                                    <div>
                                        <h2 class="home__data-number">8K</h2>
                                        <span class="home__data-subtitle">CLIENTES </span>
                                    </div>
                                </div> 
                            </div>
        
                            <div class="home__footer">
                                <div>
                                    <span class="home__footer-title">Oferta en <br>
                                                                    Procesadores!</span>
                                    <h3 class="home__footer-number">50%</h3>
                                    <span class="home__footer-subtitle">de descuento</span>
                                </div>
        
                                <div>
                                    <span class="home__footer-title">Esta oferta <br>
                                                                    termina en: </span>
        
                                    <div class="portada" id="portada">
                                        <div id="cuenta"></div> 
                                    </div>
                                </div>
                            </div>
                        </div>                       
                    </section>
                </div>
                <!--=============== Brands IMPORTANTE: MODIFICARLOS PARA QUE SE HAGAN MAS BLANCOS===============-->
                <div class="brands">
                    <div class="container">
                        <div class="wrapper flexitem">
                            <div class="item">
                                <a href="#">
                                    <img src="../img/brands1.png" alt="">
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="../img/brands2.png" alt="">
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="../img/brands3.png" alt="">
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="../img/brands4.png" alt="">
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="../img/brands5.png" alt="">
                                </a>
                            </div><div class="item">
                                <a href="#">
                                    <img src="../img/brands6.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!--=============== Trending Products IMPORTANTE: CREAR IMAGENES PARA EL SIN FONDO===============-->
                <div class="trending">
                    <div class="container">
                        <div class="wrapper">
                            <div class="sectop flexitem">
                                <h2><span class="circle"></span><span style="color:white">Productos en Tendencia 🔥</span></h2>
                            </div>
                            <div class="column">
                                <div class="flexwrap">
                                    <div class="row products big">
                                        <div class="item">
                                            <div class="offer">
                                                <p>Esta oferta termina en:</p>                                             
                                                <ul class="flexcenter">
                                                    <li>1</li>
                                                    <li>20</li>
                                                    <li>12</li>
                                                    <li>40</li>
                                                </ul>
                                            </div>
                                            <div class="media">
                                                <div class="image">
                                                    <a href="#">
                                                        <img src="../img/ryzen_5_7600.png" alt="">
                                                    </a>
                                                </div>
                                                <div class="hoverable">
                                                    <ul>
                                                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="content">
                                                <div class="rating">
                                                    <div class="stars"></div>
                                                    <span class="minitext">(392)</span>
                                                </div>
                                                <h3 class="main-links"><a href="#">Ryzen 5 7600</a></h3>
                                                <div class="price">
                                                    <span class="current">$5300.00</span>
                                                    <span class="normal mini-text">$6000.00</span>
                                                </div>
                                                <div class="stock mini-text">
                                                    <div class="qty">
                                                        <span>Existencias: <strong class="qty-available">107</strong></span>
                                                        <span>Vendidos: <strong class="qty-sold">3,459</strong></span>
                                                    </div>
                                                    <div class="bar">
                                                        <div class="available"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row products mini">
                                        <div class="item">
                                            <div class="media">
                                                <div class="thumbnail object-cover">
                                                    <a href="#">
                                                        <img src="../img/imagen_de_prueba_2.jpg" alt="">
                                                    </a>
                                                </div>
                                                <div class="hoverable">
                                                    <ul>
                                                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="discount circle flexcenter"><span>31%</span></div>
                                            </div>
                                            <div class="content">
                                                <h3 class="main-links"><a href="#">Lorem ipsum</a></h3>                  
                                                <div class="rating">
                                                    <div class="stars"></div>
                                                    <span class="minitext">(2,548)</span>
                                                </div>                       
                                                <div class="price">
                                                    <span class="current">$129.00</span>
                                                    <span class="normal mini-text">$198.00</span>
                                                </div>
                                                <div class="mini-text">
                                                    <p>2975 Vendidos</p>
                                                    <p style="color:var(--secondary-color)">Envío Gratis</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="media">
                                                <div class="thumbnail object-cover">
                                                    <a href="#">
                                                        <img src="../img/imagen_de_prueba_2.jpg" alt="">
                                                    </a>
                                                </div>
                                                <div class="hoverable">
                                                    <ul>
                                                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="discount circle flexcenter"><span>31%</span></div>
                                            </div>
                                            <div class="content">
                                                <h3 class="main-links"><a href="#">Lorem ipsum</a></h3>                  
                                                <div class="rating">
                                                    <div class="stars"></div>
                                                    <span class="minitext">(2,548)</span>
                                                </div>                       
                                                <div class="price">
                                                    <span class="current">$129.00</span>
                                                    <span class="normal mini-text">$198.00</span>
                                                </div>
                                                <div class="mini-text">
                                                    <p>2975 Vendidos</p>
                                                    <p style="color:var(--secondary-color)">Envío Gratis</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="media">
                                                <div class="thumbnail object-cover">
                                                    <a href="#">
                                                        <img src="../img/imagen_de_prueba_2.jpg" alt="">
                                                    </a>
                                                </div>
                                                <div class="hoverable">
                                                    <ul>
                                                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="discount circle flexcenter"><span>31%</span></div>
                                            </div>
                                            <div class="content">
                                                <h3 class="main-links"><a href="#">Lorem ipsum</a></h3>                  
                                                <div class="rating">
                                                    <div class="stars"></div>
                                                    <span class="minitext">(2,548)</span>
                                                </div>                       
                                                <div class="price">
                                                    <span class="current">$129.00</span>
                                                    <span class="normal mini-text">$198.00</span>
                                                </div>
                                                <div class="mini-text">
                                                    <p>2975 Vendidos</p>
                                                    <p style="color:var(--secondary-color)">Envío Gratis</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="media">
                                                <div class="thumbnail object-cover">
                                                    <a href="#">
                                                        <img src="../img/imagen_de_prueba_2.jpg" alt="">
                                                    </a>
                                                </div>
                                                <div class="hoverable">
                                                    <ul>
                                                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="discount circle flexcenter"><span>31%</span></div>
                                            </div>
                                            <div class="content">
                                                <h3 class="main-links"><a href="#">Lorem ipsum</a></h3>                  
                                                <div class="rating">
                                                    <div class="stars"></div>
                                                    <span class="minitext">(2,548)</span>
                                                </div>                       
                                                <div class="price">
                                                    <span class="current">$129.00</span>
                                                    <span class="normal mini-text">$198.00</span>
                                                </div>
                                                <div class="mini-text">
                                                    <p>2975 Vendidos</p>
                                                    <p style="color:var(--secondary-color)">Envío Gratis</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="row products mini">
                                        <div class="item">
                                            <div class="media">
                                                <div class="thumbnail object-cover">
                                                    <a href="#">
                                                        <img src="../img/imagen_de_prueba_2.jpg" alt="">
                                                    </a>
                                                </div>
                                                <div class="hoverable">
                                                    <ul>
                                                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="discount circle flexcenter"><span>31%</span></div>
                                            </div>
                                            <div class="content">
                                                <h3 class="main-links"><a href="#">Lorem ipsum</a></h3>                  
                                                <div class="rating">
                                                    <div class="stars"></div>
                                                    <span class="minitext">(2,548)</span>
                                                </div>                       
                                                <div class="price">
                                                    <span class="current">$129.00</span>
                                                    <span class="normal mini-text">$198.00</span>
                                                </div>
                                                <div class="mini-text">
                                                    <p>2975 Vendidos</p>
                                                    <p style="color:var(--secondary-color)">Envío Gratis</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="media">
                                                <div class="thumbnail object-cover">
                                                    <a href="#">
                                                        <img src="../img/imagen_de_prueba_2.jpg" alt="">
                                                    </a>
                                                </div>
                                                <div class="hoverable">
                                                    <ul>
                                                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="discount circle flexcenter"><span>31%</span></div>
                                            </div>
                                            <div class="content">
                                                <h3 class="main-links"><a href="#">Lorem ipsum</a></h3>                  
                                                <div class="rating">
                                                    <div class="stars"></div>
                                                    <span class="minitext">(2,548)</span>
                                                </div>                       
                                                <div class="price">
                                                    <span class="current">$129.00</span>
                                                    <span class="normal mini-text">$198.00</span>
                                                </div>
                                                <div class="mini-text">
                                                    <p>2975 Vendidos</p>
                                                    <p style="color:var(--secondary-color)">Envío Gratis</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="media">
                                                <div class="thumbnail object-cover">
                                                    <a href="#">
                                                        <img src="../img/imagen_de_prueba_2.jpg" alt="">
                                                    </a>
                                                </div>
                                                <div class="hoverable">
                                                    <ul>
                                                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="discount circle flexcenter"><span>31%</span></div>
                                            </div>
                                            <div class="content">
                                                <h3 class="main-links"><a href="#">Lorem ipsum</a></h3>                  
                                                <div class="rating">
                                                    <div class="stars"></div>
                                                    <span class="minitext">(2,548)</span>
                                                </div>                       
                                                <div class="price">
                                                    <span class="current">$129.00</span>
                                                    <span class="normal mini-text">$198.00</span>
                                                </div>
                                                <div class="mini-text">
                                                    <p>2975 Vendidos</p>
                                                    <p style="color:var(--secondary-color)">Envío Gratis</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="media">
                                                <div class="thumbnail object-cover">
                                                    <a href="#">
                                                        <img src="../img/imagen_de_prueba_2.jpg" alt="">
                                                    </a>
                                                </div>
                                                <div class="hoverable">
                                                    <ul>
                                                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="discount circle flexcenter"><span>31%</span></div>
                                            </div>
                                            <div class="content">
                                                <h3 class="main-links"><a href="#">Lorem ipsum</a></h3>                  
                                                <div class="rating">
                                                    <div class="stars"></div>
                                                    <span class="minitext">(2,548)</span>
                                                </div>                       
                                                <div class="price">
                                                    <span class="current">$129.00</span>
                                                    <span class="normal mini-text">$198.00</span>
                                                </div>
                                                <div class="mini-text">
                                                    <p>2975 Vendidos</p>
                                                    <p style="color:var(--secondary-color)">Envío Gratis</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--=============== Featured products IMPORTANTE: CREAR IMAGENES PARA EL SIN FONDO===============-->
                <div class="features">
                    <div class="container">
                        <div class="wrapper">
                            <div class="column">
                                <div class="sectop flexitem">
                                    <h2><span class="circle"></span><span style="color:white">Productos Destacados</span></h2>
                                    <div class="second-links">
                                        <a href="#" class="view-all">Ver todo<i class="ri-arrow-right-line"></i></a>
                                    </div>
                                </div>
                                <div class="products main flexwrap">
                                    <div class="item">
                                        <div class="media">
                                            <div class="thumbnail object-cover">
                                                <a href="#">
                                                    <img src="../img/imagen_de_prueba_2.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="hoverable">
                                                <ul>
                                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="discount circle flexcenter"><span>31%</span></div>
                                        </div>
                                        <div class="content">
                                            <div class="rating">
                                                <div class="stars"></div>
                                                <span class="minitext">(2,548)</span>
                                            </div>
                                            <h3><a href="#">Lorem ipsum</a></h3>
                                            <div class="price">
                                                <span class="current">$129.00</span>
                                                <span class="normal mini-text">$198.00</span>
                                            </div>                                      
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="media">
                                            <div class="thumbnail object-cover">
                                                <a href="#">
                                                    <img src="../img/imagen_de_prueba_2.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="hoverable">
                                                <ul>
                                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="discount circle flexcenter"><span>31%</span></div>
                                        </div>
                                        <div class="content">
                                            <div class="rating">
                                                <div class="stars"></div>
                                                <span class="minitext">(2,548)</span>
                                            </div>
                                            <h3><a href="#">Lorem ipsum</a></h3>
                                            <div class="price">
                                                <span class="current">$129.00</span>
                                                <span class="normal mini-text">$198.00</span>
                                            </div>                                      
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="media">
                                            <div class="thumbnail object-cover">
                                                <a href="#">
                                                    <img src="../img/imagen_de_prueba_2.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="hoverable">
                                                <ul>
                                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="discount circle flexcenter"><span>31%</span></div>
                                        </div>
                                        <div class="content">
                                            <div class="rating">
                                                <div class="stars"></div>
                                                <span class="minitext">(2,548)</span>
                                            </div>
                                            <h3><a href="#">Lorem ipsum</a></h3>
                                            <div class="price">
                                                <span class="current">$129.00</span>
                                                <span class="normal mini-text">$198.00</span>
                                            </div>                                      
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="media">
                                            <div class="thumbnail object-cover">
                                                <a href="#">
                                                    <img src="../img/imagen_de_prueba_2.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="hoverable">
                                                <ul>
                                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="discount circle flexcenter"><span>31%</span></div>
                                        </div>
                                        <div class="content">
                                            <div class="rating">
                                                <div class="stars"></div>
                                                <span class="minitext">(2,548)</span>
                                            </div>
                                            <h3><a href="#">Lorem ipsum</a></h3>
                                            <div class="price">
                                                <span class="current">$129.00</span>
                                                <span class="normal mini-text">$198.00</span>
                                            </div>                                      
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="media">
                                            <div class="thumbnail object-cover">
                                                <a href="#">
                                                    <img src="../img/imagen_de_prueba_2.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="hoverable">
                                                <ul>
                                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="discount circle flexcenter"><span>31%</span></div>
                                        </div>
                                        <div class="content">
                                            <div class="rating">
                                                <div class="stars"></div>
                                                <span class="minitext">(2,548)</span>
                                            </div>
                                            <h3><a href="#">Lorem ipsum</a></h3>
                                            <div class="price">
                                                <span class="current">$129.00</span>
                                                <span class="normal mini-text">$198.00</span>
                                            </div>                                      
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="media">
                                            <div class="thumbnail object-cover">
                                                <a href="#">
                                                    <img src="../img/imagen_de_prueba_2.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="hoverable">
                                                <ul>
                                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="discount circle flexcenter"><span>31%</span></div>
                                        </div>
                                        <div class="content">
                                            <div class="rating">
                                                <div class="stars"></div>
                                                <span class="minitext">(2,548)</span>
                                            </div>
                                            <h3><a href="#">Lorem ipsum</a></h3>
                                            <div class="price">
                                                <span class="current">$129.00</span>
                                                <span class="normal mini-text">$198.00</span>
                                            </div>                                      
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="media">
                                            <div class="thumbnail object-cover">
                                                <a href="#">
                                                    <img src="../img/imagen_de_prueba_2.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="hoverable">
                                                <ul>
                                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="discount circle flexcenter"><span>31%</span></div>
                                        </div>
                                        <div class="content">
                                            <div class="rating">
                                                <div class="stars"></div>
                                                <span class="minitext">(2,548)</span>
                                            </div>
                                            <h3><a href="#">Lorem ipsum</a></h3>
                                            <div class="price">
                                                <span class="current">$129.00</span>
                                                <span class="normal mini-text">$198.00</span>
                                            </div>                                      
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="media">
                                            <div class="thumbnail object-cover">
                                                <a href="#">
                                                    <img src="../img/imagen_de_prueba_2.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="hoverable">
                                                <ul>
                                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="discount circle flexcenter"><span>31%</span></div>
                                        </div>
                                        <div class="content">
                                            <div class="rating">
                                                <div class="stars"></div>
                                                <span class="minitext">(2,548)</span>
                                            </div>
                                            <h3><a href="#">Lorem ipsum</a></h3>
                                            <div class="price">
                                                <span class="current">$129.00</span>
                                                <span class="normal mini-text">$198.00</span>
                                            </div>                                      
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <!--=============== Footer ===============-->
            <!--=============== Newsletter ===============-->
            <div class="newsletter">
                <div class="container">
                    <div class="wrapper">
                        <div class="box">
                            <div class="content">
                                <h3>Recibe notificaciones de nuevos productos</h3>
                                <p>Ingresa tu email para recibir lo ultimo de nuestra tienda <strong>oferta especial</strong></p>
                            </div>
                            <form action="" class="search">
                                <span class="icon-large"><i class="ri-mail-line"></i></span>
                                <input type="mail" placeholder="Your email addres" required>
                                <button type="submit">Sign up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            <!--=============== Widgets ===============-->
            <!--=============== Menu Dispositivos moviles ===============-->
            <div class="menu-bottom desktop-hide">
                <div class="container">
                    <div class="wrapper">
                        <nav>
                            <ul class="flexitem">
                                <li>
                                    <a href="#">
                                        <i class="ri-bar-chart-line"></i>
                                        <span>Trending</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="ri-user-6-line"></i>
                                        <span>Account</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="ri-heart-line"></i>
                                        <span>Wishlist</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" class="t-search">
                                        <i class="ri-search-line"></i>
                                        <span>Search</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <i class="ri-shopping-cart-line"></i>
                                        <span>Cart</span>
                                        <div class="fly-item">
                                            <span class="item-number">0</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <!--=============== Barra de busqueda para dispositivos moviles ===============-->
            <div class="search-bottom desktop-hide">
                <div class="container">
                    <div class="wrapper">
                        <form action="" class="search">
                            <a href="#" class="t-close search-close flexcenter"><i class="ri-close-line"></i></a>
                            <span class="icon-large"><i class="ri-search-line"></i></span>
                            <input type="search" placeholder="Search">
                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="overlay"></div>
        </div>        
    </body>   
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Header,
    Footer
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    
  }),
}
</script>
