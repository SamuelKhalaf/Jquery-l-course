<!--       $(document).ready(function () {-->
<!--      -->
<!--       });-->
<!--       $(function () {-->
<!--      -->
<!--       })-->

<!--  mousedown =  تضغط على زر الماوس وتظل ضاغط -->
<!--  mouseup =   عندما ترفع اصبعك من على زر الماوس  -->
<!--  (mouseenter = عند لمس الماوس للعنصر)  ===  (mousemove) === (mouseover) )  -->
<!--  (mouseleave =  عند الابتعاد بالماوس عن العنصر) ===  (mouseout)  -->
<!--     -->
jQuery(function ($){
    // fadeIn() = show() // element should be hidden
    $('.test').fadeIn('fast').delay(5000).hide(1000).show(2000);
    //fadeOut() = hide() // element should be visible
    $('.test1').fadeOut('slow').fadeIn('slow');
    $('.append').append('Appended text');
    $('.before').appendTo('.after');
    $('.hiddenClass').click(
        function (){
            $(this).hide('slow');
        }
    );
    $('.hiddenClass').css(
        {
            'background-color': 'red',
            'font-size': '20px',
            'color': 'white'
        }
    )
    $('.dblclick1').dblclick(
        function (){
            $(this).hide('slow');
        }
    );
    $('.dblclick2').dblclick(
        function (){
            $('.dblclick1').show('slow');
        }
    );
    $('.text').text('override text');
    $('#button').click(
        function(){
            $('.innerHtml').html('<button class="btn btn-danger ">new button</button>');
        }
    );
    $('.innerHtml').hover(
        function(){
            $(this).fadeOut('fast').fadeIn('fast');
        }
    )
    $('.toggle').click(
        function(){
            $('span').toggle();
        });
    $('.go').click(
        function(){
            $(this).animate({'top': '+450px'});
            $(this).animate({'left': '+150px'});
            $(this).animate({'top': '544px'});
            $(this).animate({'left': '+176px'});
        }
    );
    $('.stop').click(
        function(){
            $('.go').stop(true,true);
        }
    );
    $('.add').after(' after').before('before ');
    $('.slide').click(
        function(){
            $('.slideToggle').slideToggle();
        }
    )
    $('.slide1').click(
        function(){
            $('.slideDown').slideDown('slow');
        }
    )
    $('.slide2').click(
        function(){
            $('.slideUp').slideUp();
        }
    )
    $('.class1').click(
        function(){
            $('.class1').toggleClass('btn-secondary');
        }
    )
    $('.class2').click(
        function(){
            $('.class2').toggleClass('btn-dark');
        }
    )
    $('.area .form-control').keyup(function () {
        var text = $(this).val().length;
        $('.area .form-text').html( 'Your text has ' + text + ' characters' );
    });
    $('input[name=\'gender\']').change(function () {
        var maleRadio = $('#maleRadio');
        var femaleRadio = $('#femaleRadio');
        var femaleSelect = $('#femaleSelect');
        var maleSelect = $('#maleSelect');

        if (maleRadio.is(':checked')) {
            femaleSelect.prop('disabled', false);
            maleSelect.prop('disabled', true);
        }
        if (femaleRadio.is(':checked')) {
            femaleSelect.prop('disabled', true);
            maleSelect.prop('disabled', false);
        }
    })

    $('.form1').submit(function () {
        if($('#maleSelect').disabled === true) {
            $(this).name = '';
        }
        if($('#femaleSelect').disabled === true) {
            $(this).name = '';
        }
    });
    $('.hamza').attr('title',function(name, value) {
        return value + ' is a good restaurant';
    })
    $('body').find('.find').css('background-color','#EEE');

    $('#myform .btn').click(function () {

        var da = $('#myform').serialize();

        $.post('post.php', da, function (data) {

            const inputGroup = $('#myform .input-group i');
            const formControl = $('#myform .form-control');

            formControl.css({'border':'none'});
            inputGroup.removeClass("icon success error fa-regular fa-circle-check bi bi-exclamation-circle").hide();

            if (data === 'ok') {
                $('#alert').html('تم ادخال البيانات بنجاح');
                inputGroup.show().addClass('icon success fa-regular fa-circle-check');
                formControl.css({'border':'1px solid green'});

            } else if(data === 'emptyUsername') {
                $('#alert').html('');
                const usernameInput = $('#myform input[name="username"]');
                usernameInput.siblings('i').show().addClass('icon error bi bi-exclamation-circle');
                usernameInput.attr('placeholder','الرجاء ادخال اسم المستخدم');
                usernameInput.css({'border':'1px solid red'});

            } else if(data === 'emptyPassword') {
                $('#alert').html('');
                const passwordInput = $('#myform input[name="password"]');
                passwordInput.siblings('i').show().addClass('icon error bi bi-exclamation-circle');
                passwordInput.attr('placeholder', 'الرجاء ادخال كلمة المرور');
                passwordInput.css({'border': '1px solid red'});
            }
        }).error(function () {
            $('#alert').html('حدث خطأ ما برجاء المحاولة مرة اخرى');
        });
    });

    $('#ajaxForm').submit(function (event) {
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        var phone    = $('#phone').val();
        var address  = $('#address').val();
        var formData = {
            'username'  : username,
            'password'  : password,
            'phone'     : phone,
            'address'   : address
        }

        var buttonElement = $('#ajaxForm .btn')
        $.ajax({
            url:'ajax.php',
            type:'POST',
            data: formData,
            beforeSend : function () {
                buttonElement.html('<span ></span><span >Loading...</span>');
                buttonElement.find('span').first().addClass('spinner-border spinner-border-sm');
            },
            statusCode: {
                404:function () {
                    $('.message').html('<p>Page not found (404)</p>');
                },
                403:function () {
                    $('.message').html('<p>Forbidden (403)</p>');
                }
            },
            success:function (data) {
                const allInputs = $('#ajaxForm .form-control');
                allInputs.css({'border': 'none'});

                if (data === "emptyUsername") {
                    $('.message').html('الرجاء ادخال اسم المستخدم');
                    $('.message').css({'color':'red'});
                    const usernameInput = $('#ajaxForm input[name="username"]');
                    usernameInput.css({'border':'1px solid red'});
                } else if (data === "emptyPassword") {
                    $('.message').html('الرجاء ادخال كلمة المرور');
                    $('.message').css({'color':'red'});
                    const passwordInput = $('#ajaxForm input[name="password"]');
                    passwordInput.css({'border': '1px solid red'});
                } else if (data === "emptyPhone") {
                    $('.message').html('الرجاء ادخال رقم الهاتف');
                    $('.message').css({'color':'red'});
                    const phoneInput = $('#ajaxForm input[name="phone"]');
                    phoneInput.css({'border': '1px solid red'});
                } else if (data === "emptyAddress") {
                    $('.message').html('الرجاء ادخال العنوان');
                    $('.message').css({'color':'red'});
                    const addressInput = $('#ajaxForm textarea[name="address"]');
                    addressInput.css({'border': '1px solid red'});
                } else if (data === "ok") {
                    $('.message').html('تم ادخال البيانات بنجاح');
                    $('.message').css({'color':'green'});
                    allInputs.css({'border': '1px solid green'});
                } else {
                    $('.message').html('لقد حدث خطأ');
                }
            },
            error: function (xhr, status, error) {
                // Display the error if the request fails
                $('.message').html("<p>An error occurred: " + error + "</p>");
            },
            complete:function () {
                // Reset the button and spinner after the request completes
                buttonElement.html('Submit');
                buttonElement.find('span').first().removeClass('spinner-border spinner-border-sm');
                buttonElement.find('span').hide();
            }
        });
    });

});

$(function () {

});

jQuery(function($){})
$(document).ready(function () {

})