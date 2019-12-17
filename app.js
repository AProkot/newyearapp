const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname))
var request = require('request');
const urlencodedParser = bodyParser.urlencoded({extended: false});

let port = 80
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/main.html')
});


var options_start = {
    url: 'https://management.azure.com/subscriptions/f5262849-8353-4216-aa3a-7adfe841fdde/resourceGroups/MyResourceGroup/providers/Microsoft.Compute/virtualMachines/NewVM/start?api-version=2019-03-01',
    method: 'POST',
    headers: { 
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkJCOENlRlZxeWFHckdOdWVoSklpTDRkZmp6dyIsImtpZCI6IkJCOENlRlZxeWFHckdOdWVoSklpTDRkZmp6dyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jMzA3ZWY1Zi1hM2Q3LTQ5NTAtOTdkZi0xZGU5MDIyNTk5MWIvIiwiaWF0IjoxNTc2NTI5NjgzLCJuYmYiOjE1NzY1Mjk2ODMsImV4cCI6MTU3NjUzMzU4MywiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhOQUFBQXlTd1pGdjJ0cGlmY25ndEFwZW5PWTd0dUorWnJOSzhqdnkvME84TFlyRGovbk5oVEpQZmExeUE2WEliTFI1UTFCVmlzaHNmUzJ3aU9CSzJubERocWV3PT0iLCJhbHRzZWNpZCI6IjE6bGl2ZS5jb206MDAwMzdGRkUxMEZBRjM4RCIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI3ZjU5YTc3My0yZWFmLTQyOWMtYTA1OS01MGZjNWJiMjhiNDQiLCJhcHBpZGFjciI6IjIiLCJlbWFpbCI6InByaWxlcGtpQG1haWwucnUiLCJmYW1pbHlfbmFtZSI6IlByaWxlcGtpbmEiLCJnaXZlbl9uYW1lIjoiSXJpbmEiLCJncm91cHMiOlsiOWJhNmZkYWYtODY0MC00MzE3LWFlZGUtOWVjMjFlNmZiNmJhIl0sImlkcCI6ImxpdmUuY29tIiwiaXBhZGRyIjoiMTk1LjcwLjIxNS4yMTUiLCJuYW1lIjoiSXJpbmEgUHJpbGVwa2luYSIsIm9pZCI6Ijk2NmJmY2RiLTEyMzktNDQ4Ni05YjQ5LWQ3OWFiNzFkZjIzMyIsInB1aWQiOiIxMDAzMjAwMDkxN0Q5MDVBIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiSUp1clg3WG5nVk1RZlZrajdLSHJsdWxnNzk3UFpHTkwtcUZVWVBVbWlPbyIsInRpZCI6ImMzMDdlZjVmLWEzZDctNDk1MC05N2RmLTFkZTkwMjI1OTkxYiIsInVuaXF1ZV9uYW1lIjoibGl2ZS5jb20jcHJpbGVwa2lAbWFpbC5ydSIsInV0aSI6InJyWjhlaGVWcFVXX3kyMW00aTlNQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCJdfQ.jgekwb_hrTP9SVTiQFXapz6U4uQ10TuHHaShOCjmjLduc9Rn4T_YaOwdBa-nTETqLGpCw-qCfsdyxM2uaD6kSARSpy4AzigGqM6-NE4V2-XKxWCEnHsl7A1I8Csi-i6m-CMfbXciPXQzPWM7LvQuaQ9s1Vs_1bMaFmBUwT1DcZQrxrB-AcuUulhLttZt4US9Cfqfn-TM59NBzWJ8iRBV-w561NlzvtK4JCtiU8paWvOv-BJMaiBC6lPTlQXYmc3gcpxPaSqeH8wzfTaqAkD2UI6pab0afXDpayyK8CIUyRLXNyIuHUQMeY_q41oVAaLLrLh_A4LuI3YVpMjpaN3Ipw',
        'Content-type': 'application/json'
    }
}

var options_stop = {
    url: 'https://management.azure.com/subscriptions/f5262849-8353-4216-aa3a-7adfe841fdde/resourceGroups/MyResourceGroup/providers/Microsoft.Compute/virtualMachines/NewVM/deallocate?api-version=2019-03-01',
    method: 'POST',
    headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkJCOENlRlZxeWFHckdOdWVoSklpTDRkZmp6dyIsImtpZCI6IkJCOENlRlZxeWFHckdOdWVoSklpTDRkZmp6dyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jMzA3ZWY1Zi1hM2Q3LTQ5NTAtOTdkZi0xZGU5MDIyNTk5MWIvIiwiaWF0IjoxNTc2NTI5NTkxLCJuYmYiOjE1NzY1Mjk1OTEsImV4cCI6MTU3NjUzMzQ5MSwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhOQUFBQUpOY0JlZzhtTjdXOFNGaTBFNzE3NUtYYkk1bHhQclBvLzYyQ2Nvb0xOcExNY1pMdDZCZk9rUUV5RnZWcUt2NVYxZnh4WmYwQWxRMmswc0dUeHJaWXR3PT0iLCJhbHRzZWNpZCI6IjE6bGl2ZS5jb206MDAwMzdGRkUxMEZBRjM4RCIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI3ZjU5YTc3My0yZWFmLTQyOWMtYTA1OS01MGZjNWJiMjhiNDQiLCJhcHBpZGFjciI6IjIiLCJlbWFpbCI6InByaWxlcGtpQG1haWwucnUiLCJmYW1pbHlfbmFtZSI6IlByaWxlcGtpbmEiLCJnaXZlbl9uYW1lIjoiSXJpbmEiLCJncm91cHMiOlsiOWJhNmZkYWYtODY0MC00MzE3LWFlZGUtOWVjMjFlNmZiNmJhIl0sImlkcCI6ImxpdmUuY29tIiwiaXBhZGRyIjoiMTk1LjcwLjIxNS4yMTUiLCJuYW1lIjoiSXJpbmEgUHJpbGVwa2luYSIsIm9pZCI6Ijk2NmJmY2RiLTEyMzktNDQ4Ni05YjQ5LWQ3OWFiNzFkZjIzMyIsInB1aWQiOiIxMDAzMjAwMDkxN0Q5MDVBIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiSUp1clg3WG5nVk1RZlZrajdLSHJsdWxnNzk3UFpHTkwtcUZVWVBVbWlPbyIsInRpZCI6ImMzMDdlZjVmLWEzZDctNDk1MC05N2RmLTFkZTkwMjI1OTkxYiIsInVuaXF1ZV9uYW1lIjoibGl2ZS5jb20jcHJpbGVwa2lAbWFpbC5ydSIsInV0aSI6Imd4d1UzaHMxWDBLTHhrUUNzMlZJQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCJdfQ.lfZcWiy_hVL7dvZPB_yP4hsrH_vk4vI7xDwsgJrK8VmToxQ88FIp6VfAV5hdcWKNOxYiEnm4eVR7o-eME2RPD5rW7KbEXnoawsutqfP4TgDg5FhzUnUKGV07avPY4NzLpBMm9t8qPNc0BZrGJvW4OsuPfUG99A6N5NXvHrKQg98s45zYmiSCAhKZ5pFHLmZPQ9TD9zyjzjS0dFu77ZdJC1vmBUM7EtLRhMi6_cokzwiHeg8n7zJl4ciKlSJcYM4w1_apKM0L-Pdvm1bElGhNkZ6s4jEE9O2c64Ta16t_oRovWIOpbtquAbH_UJ0Q2p6k_uyx4i7LVDZc_388gJ5FJQ',
        'Content-type': 'application/json'
    }
}


app.post('/start', (req, res) => {
    request(options_start, function (error, response, body) {
        console.log('Running virtual machine');
        var exec = require('node-ssh-exec');
 
        var config = {
                host: '104.211.46.245',
                username: 'anna',
                password: '006012Ira12sym'
        }
        
        const randomInt = require('random-int');
        var n = randomInt(4).toString();
        if(req.body.id=='checklist_btn') command = 'type cl' + n + '.txt';
        else if(req.body.id=='prediction_btn') command = 'type pr' + n + '.txt';
        else if(req.body.id=='movie_btn') command = 'type m' + n + '.txt';
        exec(config, command, function (error, response) {
            res.send(response);  
            request(options_stop, function (error, response, body) {
                console.log('Stopping virtual machine');
            });
        });

    });
});