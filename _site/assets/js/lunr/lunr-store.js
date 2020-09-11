var store = [{
        "title": "Input NumberWithComma",
        "excerpt":"이번 포스팅은 input 태그안에 정규식을 활용한 자동콤마 함수이다. export function numberWithCommas(x) { let parts = x.toString().split('.'); parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, ','); return parts.join('.'); } // input tag 안에 자동콤마. export function numberWithComma(x) { return x.toString().replace(/(\\d)(?=(?:\\d{3})+(?!\\d))/g, '$1,'); } export function unComma(x) { return x.toString().replace(/[^\\d]+/g, ''); } // type=\"text\" // ex this.state =...","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4000/jekyll/update/welcome-to-jekyll/",
        "teaser": null
      },{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4000/jekyll/update/welcome-to-jekyll/",
        "teaser": null
      }]
