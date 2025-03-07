<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <script src="js/jquery-1.12.0.min.js"></script>
    <link rel="stylesheet" href="css/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="css/bootstrap-icons/font/bootstrap-icons.css">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body class="container">
    <div>Samuel</div>
    <div class="test">fadeIn().delay().hide().show</div>
    <div class="test1">fadeOut()</div >
    <h1 class="append"></h1>
    <h2 class="before mb-3">first h2 element</h2>
    <h3 class="after">second h3 element</h3>
    <div class="hiddenClass mb-3">Click me to hide</div>

    <button class="dblclick1 btn btn-primary w-50 mb-3">double click me to hide</button>
    <button class="dblclick2 btn btn-primary w-50">double click me to show the button</button>

    <div class="text"> text </div>
    <div class="row">
        <button id="button" class="btn btn-primary col-sm-6 mb-3">click me to add new button</button>
        <div class="innerHtml col-sm-6"></div>
    </div>
    <button class="btn btn-secondary toggle mb-3" value="toggle">
        <span >loading....</span>
        <span style="display: none">LOADING....</span>
    </button>
    <button class="go btn btn-primary  " style="position: absolute;">move me</button>
    <div>
        <button class="stop btn btn-primary   ">stop him</button>
    </div>
    <span class="add">WORD</span>
    <div>
        <button class="slide btn btn-primary" >click to show\hide toggle content</button>
        <span class="slideToggle">Content to toggle</span>
    </div>
    <div>
        <button class="slide1 btn btn-warning" >click to only show slideDown() content</button>
        <span class="slideDown" style="display: none;">Content to show</span>
    </div>
    <div>
        <button class="slide2 btn btn-info" >click to only hide slideUp() content</button>
        <span class="slideUp">Content to hide</span>
    </div>
    <div>
        <button class="class1 btn" >click to change style</button>
        <button class="class2 btn" >click to change style</button>
    </div>
    <div class="row area mb-3">
        <div class="col-auto">
            <label for="floatingTextarea" > Type Your Comment Here</label>
        </div>
        <div class="col-auto">
            <textarea class="form-control" id="floatingTextarea" placeholder="" style="resize: none;"></textarea>
        </div>
        <div class="col-auto">
            <span class="form-text"></span>
        </div>
    </div>
    <form class="form1" method="post">
        <div class="mb-3 form-check">
            <input type="radio" class="form-check-input" id="maleRadio" name="gender" value="1" checked>
            <label class="form-check-label" for="maleRadio">male</label>
            <div class="mb-3">
                <select class="form-control" id="femaleSelect" name="partnerName">
                    <option selected value="">Select Your Partner</option>
                    <option value="1">asmaa</option>
                    <option value="2">shimaa</option>
                    <option value="3">hasnaa</option>
                </select>
            </div>
        </div>
        <div class="mb-3 form-check">
            <input type="radio" class="form-check-input" id="femaleRadio" name="gender" value="2">
            <label class="form-check-label" for="femaleRadio">female</label>
            <div class="mb-3">
                <select class="form-control" name="partnerName" id="maleSelect" disabled >
                    <option selected value="">Select Your Partner</option>
                    <option value="1">ahmed</option>
                    <option value="2">mohammed</option>
                    <option value="3">sayed</option>
                </select>
            </div>
        </div>
        <button type="submit" name="submit" class="btn btn-primary">Submit</button>
    </form>

    <div>
        <a class="hamza" href="https://AboHamza.com" title="abo hamza">abo hamza</a>
    </div>
    <div>
        <p class="find" ><strong>Finded</strong> Element</p>
    </div>
    <div>
        <form id="myform">
            <div id="alert"></div>
            <div class="row">
                <div class="col">
                    <div class="input-group">
                        <input class="form-control" type="text" name="username" placeholder="Username">
                        <i class=""></i>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <input class="form-control" type="password" name="password" placeholder="Password">
                        <i class=""></i>
                    </div>
                </div>
            </div>
            <input class="btn btn-success" type="button" name="submit" value="Submit">
        </form>
    </div>
    <div>
        <form id="ajaxForm" class="mb-5">
            <div class="message"></div>
            <fieldset>
                <legend>Account Information</legend>
                <div class="input-group">
                    <div class="form-floating">
                        <input class="form-control" type="text" id="username" name="username" placeholder="">
                        <label class="form-label" for="username">Username</label>
                    </div>
                    <div class="form-floating">
                        <input class="form-control" type="password" id="password" name="password"  placeholder="">
                        <label for="password">Password</label>
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Contact Details</legend>
                <div class="input-group">
                    <div class="form-floating">
                        <input class="form-control" type="tel" id="phone" name="phone"  placeholder="">
                        <label for="phone">Phone</label>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" id="address" name="address"  placeholder=""></textarea>
                        <label for="address">Address</label>
                    </div>
                </div>
            </fieldset>
            <div class = 'col-6 mx-auto'>
                <button class="btn btn-primary w-100" type="submit">Submit</button>
            </div>
        </form>
    </div>


    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/plugins.js"></script>
  </body>
</html>
