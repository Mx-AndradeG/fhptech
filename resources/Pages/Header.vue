<template>
        <header>
            <!--=============== Header 1 Icons/Logins/Idioma/Moneda ===============-->
            <div class="header-top mobile-hide">
                <div class="container">
                    <div class="wrapper flexitem">
                        <div class="left">
                            <ul class="flexitem main-links">
                                <li>
                                    <a href="#"><i class="ri-facebook-fill" style="color:#3b5998;"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="ri-twitter-fill" style="color: #00acee;"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="ri-youtube-fill" style="color: #ff3333;"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="ri-instagram-fill" style="color: #C13584;"></i></a>
                                </li>                        
                                <li><a href="#" class="productos-destacados">Productos destacados</a></li>
                                <li><a href="#" class="wishlist">Wishlist</a></li>
                            </ul>
                        </div>
                        <div class="right">
                            <ul class="flexitem main-links">
                                <li><a href="#" class="registrarme">Registrarme</a></li>
                                <li><a href="#" class="micuenta">Mi cuenta</a></li>
                                <li><a href="#" class="rastreo">Rastreo de pedido</a></li>
                                <li><a href="#">MXN <span class="icon-small"><i class="ri-arrow-down-s-line"></i></span></a>
                                    <ul>
                                        <li class="current"><a href="#">MXN</a></li>
                                        <li><a href="#">USD</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Español <span class="icon-small"><i class="ri-arrow-down-s-line"></i></span></a>
                                    <ul>
                                        <li class="current"><a href="#">Español</a></li>
                                        <li><a href="#">Ingles</a></li>                                 
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!--=============== Header 2 Logo/Menu/Wishlist/Cart/Total ===============-->
            <div class="header-nav">
                <div class="container">
                    <div class="wrapper flexitem">
                        <a href="#" class="trigger desktop-hide"><span class="i ri-menu-2-line"></span></a>
                        <div class="left flexitem">
                            <div class="logo"><a href="/"><span class="circle"></span>FHPTECH</a></div>
                            <nav class="mobile-hide">
                                <ul class="flexitem second-links">
                                    <li><a href="#" class="inicio">Inicio</a></li>
                                    <li><a href="#" class="productos">Productos</a></li>
                                    <li><a href="#" class="ubicacion">Ubicacion</a></li><li>
                                        <a href="#" class="armarpc">Armar PC
                                            <div class="fly-item"><span>New!</span></div>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="right">
                            <ul class="flexitem second-links">
                                <li class="mobile-hide"><a href="#">
                                    <div class="icon-large"><i class="ri-heart-line">
                                        <div class="fly-item"><span class="item-number">0</span></div>
                                    </i></div>
                                </a></li>
                                <li><a href="#" class="iscart">
                                    <div class="icon-large">
                                        <i class="ri-shopping-cart-line"></i>
                                        <div class="fly-item"><span class="item-number">0</span></div>
                                    </div>
                                    <div class="icon-text">
                                        <div class="mini-text">Total</div>
                                        <div class="cart-total">$0.00</div>
                                    </div>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!--=============== Header 3 Super Menu/Bar Search IMPORTANTE: MODIFICAR EL SUPER MENU! ===============-->
            <div class="header-main mobile-hide">
                <div class="container">
                    <div class="wrapper flexitem">
                        <div class="left">
                            <div class="dpt-cat">
                                <div class="dpt-head">
                                    <div class="main-text">Todos nuestros productos</div>
                                    <div class="mini-text mobile-hide">Total: 1059 Productos</div>
                                    <a href="#" class="dpt-trigger mobile-hide">
                                        <i class="ri-menu-3-line ri-xl"></i>
                                    </a>
                                </div>
                                <div class="dpt-menu">
                                    <ul class="second-links">
                                        <li class="has-child computers">
                                            <a href="#" class="titulo-computadoras">
                                                <div class="icon-large"><i class="ri-computer-line"></i></div>
                                                Computadoras
                                                <div class="icon-small"><i class="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <ul class="ul-computadoras">
                                                <li><a href="#"><i class="bi bi-cpu">&nbsp;</i>Procesadores</a></li>
                                                <li><a href="#"><i class="bi bi-gpu-card">&nbsp;</i>Tarjetas Graficas</a></li>
                                                <li><a href="#"><i class="bi bi-device-ssd">&nbsp;</i>Almacenamiento</a></li>
                                                <li><a href="#"><i class="bi bi-motherboard">&nbsp;</i>Tarjetas Madre</a></li>
                                                <li><a href="#"><i class="bi bi-memory">&nbsp;</i>Memoria RAM</a></li>
                                                <li><a href="#"><i class="bi bi-pc">&nbsp;</i>Gabinetes</a></li>
                                                <li><a href="#"><i class="bi bi-battery-charging">&nbsp;</i>Fuentes de Poder</a></li>
                                                <li><a href="#"><i class="bi bi-fan">&nbsp;</i>Ventilacion</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-child perifericos">
                                            <a href="#" class="titulo-perifericos">
                                                <div class="icon-large"><i class="ri-keyboard-fill"></i></div>
                                                Perifericos
                                                <div class="icon-small"><i class="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <ul class="ul-perifericos">
                                                <li><a href="#"><i class="bi bi-cpu">&nbsp;</i>Teclados</a></li>
                                                <li><a href="#"><i class="bi bi-mouse">&nbsp;</i>Mouse</a></li>
                                                <li><a href="#"><i class="bi bi-headset">&nbsp;</i>Audifonos</a></li>
                                                <li><a href="#"><i class="bi bi-display">&nbsp;</i>Monitor</a></li>
                                                <li><a href="#"><i class="bi bi-square">&nbsp;</i>Mouse Pad</a></li>
                                                <li><a href="#"><i class="bi bi-controller">&nbsp;</i>Mando Inalambrico</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-child extras">
                                            <a href="#" class="titulo-extras">
                                                <div class="icon-large"><i class="ri-command-line"></i></div>
                                                Extras
                                                <div class="icon-small"><i class="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <ul class="ul-extras">
                                                <li><a href="#"><i class="bi bi-plug">&nbsp;</i>Cables/Adaptadores</a></li>
                                                <li><a href="#"><i class="bi bi-wind">&nbsp;</i>Aire Comprimido</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="search-box">
                                <form action="" class="search">
                                    <span class="icon-large"><i class="ri-search-line"></i></span>
                                    <input type="search" placeholder="Search for products">
                                    <button type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>