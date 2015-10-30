<?php //### HEAD ###
    include 'partial-views/head.php';
?>

<body id="trumps">

    <?php //### HEADER ###
        include 'partial-views/header.php';
    ?>

    <?php //### CONTENT ### ?>
    <div class="splash">
        <div class="wrapper splash--content">
            <div class="js-slider-activation +inactive" slideName="nav" slideID="collection" >
                <ul class="nav nav--fit">
                   <li class="text--center"><a class="js-slider-activator btn" slideName="collection" slideID="category1">Foo</a></li>
                   <li class="text--center"><a class="js-slider-activator btn" slideName="collection" slideID="category2">Bar</a></li>
                   <li class="text--center"><a class="js-slider-activator btn" slideName="collection" slideID="category3">Baz</a></li>
                </ul>
                <div class="media">
                    <div class="js-slider-activation +active" slideName="collection" slideID="category1">
                        <div class="media__img">
                            <!-- # TODO create image scss block and remove inline styling. -->
                            <img src="http://placekitten.com/g/350/350" style="width: 400px;" alt="">
                        </div>
                        <div class="media__body">
                            <h3 class="delta push--ends">Category 1</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec vehicula urna ac nisi vehicula posuere. Sed nec odio risus.
                                Mauris sit amet mollis justo. Sed congue pulvinar volutpat.
                                Proin tempus, urna bibendum ornare tempus, nisl elit cursus ligula, in
                                elementum sem mauris eget velit. Etiam quis tellus dignissim, lacinia tellus id,
                                iaculis nisl. Vestibulum facilisis placerat tincidunt. Curabitur euismod odio
                                at cursus ornare. Sed volutpat vitae ante et hendrerit.
                                Phasellus sit amet augue eu mauris viverra dictum.
                            </p>
                        </div>
                    </div>
                    <div class="js-slider-activation +inactive" slideName="collection" slideID="category2">
                        <div class="media__img">
                            <!-- # TODO create image scss block and remove inline styling. -->
                            <img src="http://placekitten.com/g/500/500" style="width: 400px;" alt="">
                        </div>
                        <div class="media__body">
                            <h3 class="delta push--ends">Category 2</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec vehicula urna ac nisi vehicula posuere. Sed nec odio risus.
                                Mauris sit amet mollis justo. Sed congue pulvinar volutpat.
                                Proin tempus, urna bibendum ornare tempus, nisl elit cursus ligula, in
                                elementum sem mauris eget velit. Etiam quis tellus dignissim, lacinia tellus id,
                                iaculis nisl. Vestibulum facilisis placerat tincidunt. Curabitur euismod odio
                                at cursus ornare. Sed volutpat vitae ante et hendrerit.
                                Phasellus sit amet augue eu mauris viverra dictum.
                            </p>
                        </div>
                    </div>
                    <div class="js-slider-activation +inactive" slideName="collection" slideID="category3">
                        <div class="media__img">
                            <!-- # TODO create image scss block and remove inline styling. -->
                            <img src="http://placekitten.com/g/250/250" style="width: 400px;" alt="">
                        </div>
                        <div class="media__body">
                            <h3 class="delta push--ends">Category 3</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec vehicula urna ac nisi vehicula posuere. Sed nec odio risus.
                                Mauris sit amet mollis justo. Sed congue pulvinar volutpat.
                                Proin tempus, urna bibendum ornare tempus, nisl elit cursus ligula, in
                                elementum sem mauris eget velit. Etiam quis tellus dignissim, lacinia tellus id,
                                iaculis nisl. Vestibulum facilisis placerat tincidunt. Curabitur euismod odio
                                at cursus ornare. Sed volutpat vitae ante et hendrerit.
                                Phasellus sit amet augue eu mauris viverra dictum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="js-slider-activation +inactive" slideName="nav" slideID="basket">
                <h2 class="gamma push--bottom">The Basket Section</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vehicula urna ac nisi vehicula posuere. Sed nec odio risus.
                    Mauris sit amet mollis justo. Sed congue pulvinar volutpat.
                    Proin tempus, urna bibendum ornare tempus, nisl elit cursus ligula, in
                    elementum sem mauris eget velit. Etiam quis tellus dignissim, lacinia tellus id,
                    iaculis nisl. Vestibulum facilisis placerat tincidunt. Curabitur euismod odio
                    at cursus ornare. Sed volutpat vitae ante et hendrerit.
                    Phasellus sit amet augue eu mauris viverra dictum.
                </p>
            </div>
            <div class="js-slider-activation +inactive" slideName="nav" slideID="menu">
                <div class="grid">
                    <div class="grid__item one-whole">
                        <ul class="nav nav--fit">
                            <li class="hard"><a href="" class="btn">One</a></li>
                            <li class="hard"><a href="" class="btn push-quarter--sides">Two</a></li>
                            <li class="hard"><a href="" class="btn">Three</a></li>
                        </ul>
                    </div><!--
                    --><div class="grid__item one-whole">
                        <ul class="nav nav--fit push-quarter--top">
                            <li class="hard"><a href="" class="btn push-quarter--right">One</a></li>
                            <li class="hard"><a href="" class="btn">Two</a></li>
                        </ul>
                    </div><!--
                    --><div class="grid__item one-whole">
                        <div class="social">
                            <ul class="nav nav--block">
                                <li><a class="social--icon" href=""><span class="icon-facebook--after"></span></a></li>
                                <li><a class="social--icon" href=""><span class="icon-twitter--after"></span></a></li>
                                <li><a class="social--icon" href=""><span class="icon-youtube--after"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <main>
        <div class="wrapper">

            <div class="grid">
                <div class="grid__item one-whole">
                    <h1 class="mega">The Shop</h1>
                </div><!--
             --><div class="grid__item one-fifth lap-one-quarter palm-one-whole">
                    <h2 class="flush--top">Filters</h2>
                    <ul class="nav nav--stacked">
                        <li><a class="btn js-selector" value="1"><span class="js-selection">Filter 1</span></a></li>
                        <li><a class="btn js-selector" value="2"><span class="js-selection">Filter 2</span></a></li>
                        <li><a class="btn js-selector" value="3"><span class="js-selection">Filter 3</span></a></li>
                    </ul>
                </div><!--
                --><div class="grid__item four-fifths lap-three-quarters palm-one-whole">
                    <div class="grid">
                        <!-- TODO change list to divs. -->
                        <ul>
                            <li class="grid__item one-quarter lap-one-third palm-one-half">
                                <div class="product__main">
                                    <img src="http://placekitten.com/g/400/290"/>
                                    <p>Product one</p>
                                </div>
                            </li><!--
                            --><li class="grid__item one-quarter lap-one-third palm-one-half">
                                <div class="product__main">
                                    <img src="http://placekitten.com/g/400/290"/>
                                    <p>Product one</p>
                                </div>
                            </li><!--
                            --><li class="grid__item one-quarter lap-one-third palm-one-half">
                                <div class="product__main">
                                    <img src="http://placekitten.com/g/400/290"/>
                                    <p>Product one</p>
                                </div>
                            </li><!--
                            --><li class="grid__item one-quarter lap-one-third palm-one-half">
                                <div class="product__main">
                                    <img src="http://placekitten.com/g/400/290"/>
                                    <p>Product one</p>
                                </div>
                            </li><!--
                            --><li class="grid__item one-quarter lap-one-third palm-one-half">
                                <div class="product__main">
                                    <img src="http://placekitten.com/g/400/290"/>
                                    <p>Product one</p>
                                </div>
                            </li><!--
                            --><li class="grid__item one-quarter lap-one-third palm-one-half">
                                <div class="product__main">
                                    <img src="http://placekitten.com/g/400/290"/>
                                    <p>Product one</p>
                                </div>
                            </li><!--
                            --><li class="grid__item one-quarter lap-one-third palm-one-half">
                                <div class="product__main">
                                    <img src="http://placekitten.com/g/400/290"/>
                                    <p>Product one</p>
                                </div>
                            </li><!--
                            --><li class="grid__item one-quarter lap-one-third palm-one-half">
                                <div class="product__main">
                                    <img src="http://placekitten.com/g/400/290"/>
                                    <p>Product one</p>
                                </div>
                            </li><!--
                            --><li class="grid__item one-quarter lap-one-third palm-one-half">
                                <div class="product__main">
                                    <img src="http://placekitten.com/g/400/290"/>
                                    <p>Product one</p>
                                </div>
                            </li><!--
                            --><li class="grid__item one-quarter lap-one-third palm-one-half">
                                <div class="product__main">
                                    <img src="http://placekitten.com/g/400/290"/>
                                    <p>Product one</p>
                                </div>
                            </li><!--
                            --><li class="grid__item one-quarter lap-one-third palm-one-half">
                                <div class="product__main">
                                    <img src="http://placekitten.com/g/400/290"/>
                                    <p>Product one</p>
                                </div>
                            </li><!--
                            --><li class="grid__item one-quarter lap-one-third palm-one-half">
                                <div class="product__main">
                                    <img src="http://placekitten.com/g/400/290"/>
                                    <p>Product one</p>
                                </div>
                            </li><!--
                            --><li class="grid__item one-quarter lap-one-third palm-one-half">
                                <div class="product__main">
                                    <img src="http://placekitten.com/g/400/290"/>
                                    <p>Product one</p>
                                </div>
                            </li><!--
                            --><li class="grid__item one-quarter lap-one-third palm-one-half">
                                <div class="product__main">
                                    <img src="http://placekitten.com/g/400/290"/>
                                    <p>Product one</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <?php //### FOOTER ###
        include 'partial-views/footer.php';
    ?>

    <!-- JS
    ================================================== -->
    <script src="/release/js/app.js"></script>

    <!-- End Document
    ================================================== -->

</body>
</html>
