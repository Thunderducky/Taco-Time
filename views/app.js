module.exports = function (props) {
    return `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Taco Time</title>
    </head>
    <body>
    <h1>Check out my Tacos!</h1>
    ${ body}
    <form action="/" method="POST">
    <textarea type="text" name="taco"></textarea>

    <button type="submit">Submit</button>
    </form>

    </body>
    </html>
`;
}