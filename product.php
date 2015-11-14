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
        <div class="wrapper push">
            <div class="grid">
                <div class="grid__item one-third palm-one-whole">
                    <form action="">
                        <input type="submit" value="Buy" name="checkout" class="btn one-whole push--bottom">
                    </form>
                    <img src="http://placekitten.com/g/550/550" alt="">
                </div><!--
             --><div class="grid__item two-thirds palm-one-whole">
                    <h1>Product Name</h1>
                    <p>
                        Duis vehicula laoreet lacus sit amet luctus. Donec tempor pulvinar nunc nec rhoncus. Nullam pulvinar placerat nisi ac viverra. Nullam egestas, lacus quis fermentum rhoncus, magna enim consectetur nunc, in fringilla leo felis sit amet sem. Nunc nisi nunc, vehicula mattis justo a, tempor convallis lectus. Morbi ac ante tortor. Fusce vitae nunc ut nunc vehicula luctus id nec ex.
                    </p>
                    <p><strong># <span class="js-percent1"></span>%</strong></p>
                    <p><strong># <span class="js-percent2"></span>%</strong></p>
                    <p><strong># <span class="js-ml"></span>ml</strong></p>
                </div>
            </div>
            <div class="product-bottom product-price-cnt">
                <div class="push--bottom push-half--right">
                    Price <span class="product-price push-half--left">$$$</span>
                </div>
                <form action="">
                    <input type="submit" value="Buy" name="checkout" class="btn one-third lap-two-thirds palm-one-whole">
                </form>
                <div class="social">
                    <ul class="nav nav--block">
                        <li><a class="social--icon" href=""><span class="icon-facebook--after"></span></a></li>
                        <li><a class="social--icon" href=""><span class="icon-twitter--after"></span></a></li>
                    </ul>
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
