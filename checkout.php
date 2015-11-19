<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->

<?php //### HEAD ###
    include 'partial-views/head.php';
?>

<body id="trumps">

    <?php //### HEADER ###
        include 'partial-views/header.php';
    ?>

    <?php //### CONTENT ### ?>
    <main>
        <div class="wrapper">
            <div class="soft--top">
                <div class="grid">
                    <div class="grid__item one-quarter lap-one-third palm-one-whole">
                        <div class="btn">Back To Shop</div>
                    </div><!--
                    --><div class="grid__item one-half lap-one-third palm--hide"></div><!--
                    --><div class="grid__item one-quarter lap-one-third palm-one-whole">
                        <div class="btn">Proceed</div>
                    </div>
                </div>
            </div>
            <div class="soft--top palm--hide">
                <div class="grid">
                    <div class="grid__item two-quarters palm-one-whole">
                        <div>Item</div>
                    </div><!--
                    --><div class="grid__item two-sixths palm-one-half">
                        <div class="text--center">Quantity</div>
                    </div><!--
                    --><div class="grid__item one-sixth palm-one-half">
                        <div class="text--center">Price</div>
                    </div>
                </div>
            </div>
            <!-- ITEMS LIST START -->
            <div class="soft-half--top">
                <div class="grid">
                    <div class="grid__item two-quarters palm-one-whole">
                        <div class="grid">
                            <div class="grid__item one-third">
                                <img src="http://placekitten.com/g/150/150" alt="">
                            </div><!--
                            --><div class="grid__item two-thirds">
                                <div>Name</div>
                                <ul>
                                    <li>Lorem</li>
                                    <li>Ipsum</li>
                                    <li>Dolor</li>
                                </ul>
                            </div>
                        </div>
                    </div><!--
                    --><div class="grid__item two-sixths palm-two-thirds">
                        <div class="grid">
                            <div class="grid__item two-thirds">
                                <input class="checkout-qty"type="text" >
                            </div><!--
                            --><div class="grid__item one-third">
                                <div class="btn one-whole ">X</div>
                            </div>
                        </div>
                    </div><!--
                    --><div class="grid__item one-sixth palm-one-third">
                        <div class="text--center">$$$</div>
                    </div>
                </div>
            </div>
            <div class="soft-half--top">
                <div class="grid">
                    <div class="grid__item two-quarters palm-one-whole">
                        <div class="grid">
                            <div class="grid__item one-third">
                                <img src="http://placekitten.com/g/150/150" alt="">
                            </div><!--
                            --><div class="grid__item two-thirds">
                                <div>Name</div>
                                <ul>
                                    <li>Lorem</li>
                                    <li>Ipsum</li>
                                    <li>Dolor</li>
                                </ul>
                            </div>
                        </div>
                    </div><!--
                    --><div class="grid__item two-sixths palm-two-thirds">
                        <div class="grid">
                            <div class="grid__item two-thirds">
                                <input class="checkout-qty"type="text" >
                            </div><!--
                            --><div class="grid__item one-third">
                                <div class="btn one-whole ">X</div>
                            </div>
                        </div>
                    </div><!--
                    --><div class="grid__item one-sixth palm-one-third">
                        <div class="text--center">$$$</div>
                    </div>
                </div>
            </div>
            <div class="soft-half--top">
                <div class="grid">
                    <div class="grid__item two-quarters palm-one-whole">
                        <div class="grid">
                            <div class="grid__item one-third">
                                <img src="http://placekitten.com/g/150/150" alt="">
                            </div><!--
                            --><div class="grid__item two-thirds">
                                <div>Name</div>
                                <ul>
                                    <li>Lorem</li>
                                    <li>Ipsum</li>
                                    <li>Dolor</li>
                                </ul>
                            </div>
                        </div>
                    </div><!--
                    --><div class="grid__item two-sixths palm-two-thirds">
                        <div class="grid">
                            <div class="grid__item two-thirds">
                                <input class="checkout-qty"type="text" >
                            </div><!--
                            --><div class="grid__item one-third">
                                <div class="btn one-whole ">X</div>
                            </div>
                        </div>
                    </div><!--
                    --><div class="grid__item one-sixth palm-one-third">
                        <div class="text--center">$$$</div>
                    </div>
                </div>
            </div>
            <!-- ITEMS LIST END -->
            <div class="soft--top">
                <div class="grid">
                    <div class="grid__item three-quarters lap-two-thirds palm-one-whole">
                        <input class="js-promo-code checkout-promo" type="text" placeholder="Promo code">
                    </div><!--
                    --><div class="grid__item one-quarter lap-one-third palm-one-whole">
                        <div class="soft--top product-price-cnt push-half--right text--right">
                            Total <span class="product-price push-half--left">$$$</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="soft--top">
                <div class="grid">
                    <div class="grid__item three-quarters lap-two-thirds palm--hide">
                    </div><!--
                    --><div class="grid__item one-quarter lap-one-third palm-one-whole">
                        <div class="btn one-whole">Proceed</div>
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
