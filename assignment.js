const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment</title></head>');
        res.write('<body><h1>Hello user, welcome to my Node js Server!</h1></body>');
        res.write('</html>');
        return res.end();
    };

    if(url === '/users') {
        res.write('<html>');
        res.write('<head><title>Assignment</title></head>');
        res.write('<body>');
        res.write('<ul><li>John Doe</li><li>Andrew Tate</li><li>Marcus Brownee</li></ul>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username" /><button type="submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    };

    if(url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedData = Buffer.concat(body).toString();
            console.log(parsedData);
            const username = parsedData.split('=')[1];
            console.log(username);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    };

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment</title></head>');
    res.write('<body><h1>Welcome to the Assignment Server!</h1></body>');
    res.write('</html>');
    res.end
});

server.listen(3000);