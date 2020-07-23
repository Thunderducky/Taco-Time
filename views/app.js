module.exports = function (body) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
    
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    
        <title>Taco Time</title>

        <style>
            body {
                font-family: 'Special Elite', cursive;
            }
    
            .jumbotron {
                text-align: center;
                background-color: white;
                margin-top: 10px;
                padding-top: 0px;
            }
    
            .taco {
                height: 150px;
            }
    
            .btn {
                background-color: #457B9D;
                color: white;
            }
    
            .row {
                justify-content: space-around;
                margin-bottom: 30px;
            }
    
            .list-group-item {
                border: none;
                margin-bottom: 10px;
                text-align: center;
                font-size: 20px;
            }
    
            .display-4 {
                font-size: 44px;
            }
        </style>
        
    </head>
    
    <body>
    
        <div class="jumbotron jumbotron-fluid">
    
            <div class="container">
    
                <h1 class="display-4">Lets taco bout some Tacos!</h1>
                <img src="https://img.freepik.com/free-vector/cartoon-taco_6460-316.jpg?size=626&ext=jpg" alt="taco header"
                    class="taco">
            </div>
    
        </div>
    
        <div class="container">
    
            <div class="row">
    
                <div class="col-md-6 not-eaten">
    
                    <ul class="list-group">
    
                        ${body}
                    
                    </ul>
    
                </div>
    
                <div class="col-md-6 devoured">
    
                    <ul class="list-group">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
    
                </div>
    
            </div>
    
        </div>
    
        <div class="container">
    
            <form class="create-form">
    
                <div class="form-group">
    
                    <label for="tacotext">What's your favorite taco?</label>
                    <textarea class="form-control" id="tacotext" name="tacos" rows="1"></textarea>
    
                </div>
    
                <center><button class="btn" type="submit">Thats the Stuff!</button></center>
    
            </form>
    
        </div>
    
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
            integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
            crossorigin="anonymous"></script>
        <script src="logic.js"></script>
    
    </body>
    
    </html>
    `
};
