const http = require('http');

const httpRequest = (params) => {
    return new Promise((resolve, reject) => {
        const req = http.request(params, (res) => {
           
           if (res.statusCode < 200 || res.statusCode >= 300) {
                return reject(new Error('statusCode=' + res.statusCode));
            }
            
            // cumulate data
            var body = [];
            res.on('data', (chunk) => {
                body.push(chunk);
            });
            // resolve on end
            res.on('end', () => {
                try {
                    body = JSON.parse(Buffer.concat(body).toString());
                } catch(e) {
                    reject(e);
                }
                resolve(body);
            });
           
           
        });
        
        // reject on request error
        req.on('error', function(err) {
            // This is not a "Second reject", just a different sort of failure
            reject(err);
        });

        // IMPORTANT
        req.end();        
    });
};

const params = {
    host: 'api.plos.org',
    port: 80,
    method: 'GET',
    path: '/search?q=title:DNA'
};

httpRequest(params).then((body) => {
    console.log(body);
});

