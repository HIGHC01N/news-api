// 네이버 검색 API예제는 블로그를 비롯 전문자료까지 호출방법이 동일하므로 blog검색만 대표로 예제를 올렸습니다.
// 네이버 검색 Open API 예제 - 블로그 검색
var express = require('express');
var app = express();
var client_id = "zIAqvKoIcFlaWPLosWYj"; // 발급받은 CLIENT ID를 넣어줍니다.
var client_secret = "dZvmmUa7YD"; // 발급받은 CLIENT SECRET을 넣어줍니다.


app.get('/search/blog', function (req, res) {
   var api_url = 'https://openapi.naver.com/v1/search/blog?query=' + encodeURI(req.query.query); // json 결과
//   var api_url = 'https://openapi.naver.com/v1/search/blog.xml?query=' + encodeURI(req.query.query); // xml 결과
   var request = require('request');
   var options = {
       url: api_url,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);
     } else {
      console.log('error = ' + response.statusCode); 
      res.status(response.statusCode).end();
       
     }
   });
 });
 app.listen3000, function () {
   console.log('http://localhost:3000/search/blog?query=검색어 app listening on port 3000!');
 };
