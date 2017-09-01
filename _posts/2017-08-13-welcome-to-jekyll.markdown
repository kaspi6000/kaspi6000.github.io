---
layout: post
title:  "Input NumberWithComma"
date:   2017-08-13 16:30:39
categories: jekyll update
---
이번 포스팅은 input 태그안에 정규식을 활용한 자동콤마 함수이다.

{% highlight javascript %}
export function numberWithCommas(x) {
	let parts = x.toString().split('.');
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return parts.join('.');
}
// input tag 안에 자동콤마.

export function numberWithComma(x) {
    return x.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

export function unComma(x) {
    return x.toString().replace(/[^\d]+/g, '');
}
// type="text"


// ex
this.state = {
    newNumber : ''
};

numberWithComma(unComma(newNumber));

const number = 100000000

console.log(numberWithCommas(number));
// result : 100,000,000
{% endhighlight %}


[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
