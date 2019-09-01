const http = require('http');

const server = http.createServer((req, res) => {

    const { url } = req;

    if(req.url === '/create-user' && req.method === 'POST'){
    
        const body = [];

        req.on('data', chunk => {
            console.log('chunk: ', chunk)
            body.push(chunk);
        });

        req.on('end', ()=> {
            const parsedBoby = Buffer.concat(body).toString();

            const value = parsedBoby.split('=')[1];
            console.log('Data: ', value);
        })


        return false;
    }

    res.writeHead(200, {
        'Content-Type': 'text/html',
    });

    if(url === '/users'){
        res.write(`
            <ul>
                <li>Matheus Gomes</li>
                <li>Larisse Lima</li>
            </ul>
        `);
        res.end();
        return false;
    }

    res.write('<form action="/create-user" method="POST"> <input type="text" name="username"/><button type="submit">Enviar!</button></form>');
    res.end();
})

server.listen(3000);