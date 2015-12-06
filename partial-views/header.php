    <header>
        <div class="wrapper">
            <div class="grid">
                <div class="grid__item one-half lap-one-third palm-one-quarter">
                    <div class="push-half--top push--left">
                        <img src="http://placekitten.com/g/125/125" alt="Logo Placeholder">
                    </div>
                </div><!--
             --><div class="grid__item one-half lap-two-thirds palm-three-quarters">
                    <nav class="push-half--top">

                        <form action="/search" method="POST" name="search">
                            <div class="push-double--right">
                                <ul class="nav nav--fit flush">
                                    <li>
                                        <a class="js-slider-activator js-button btn" slideName="nav" slideID="basket" collapsible>Basket</a>
                                    </li>
                                    <li>
                                        <a class="js-slider-activator js-button btn" slideName="nav" slideID="menu" collapsible>Menu</a>
                                    </li>
                                    <input type="text" class="js-search--input input-box__input box-slide--right +inactive--width" placeholder="Search..."/>
                                </ul>
                            </div>

                            <div class="input-box">
                                <button type="submit" class="js-search--button js-button input-box__btn btn">
                                    <span class="icon--search"></span>
                                </button>
                            </div>
                        </form>

                        <ul class="nav nav--fit flush">
                            <li>
                                <a class="js-slider-activator js-button btn" slideName="nav" slideID="collection" collapsible>Collection</a>
                            </li>
                        </ul>
                    </nav>
                    <div class="social">
                        <ul class="nav nav--fit flush">
                            <li class="hard">
                                <a class="social--icon" href=""><span class="icon--twitter"></span></a>
                            </li>
                            <li class="hard">
                                <a class="social--icon" href=""><span class="icon--facebook"></span></a>
                            </li>
                            <li class="hard">
                                <a class="social--icon" href=""><span class="icon--mail"></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <?php //### SPLASH ###
        include 'partial-views/splash.php';
    ?>
