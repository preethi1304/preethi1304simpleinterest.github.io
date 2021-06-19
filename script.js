function myfunction() {
    let p = document.getElementById('p').value;
    let r = document.getElementById('r').value;
    let y = document.getElementById('y').value;
    let si = (p * r * y) / 100;
    document.getElementById("demo").innerHTML = '<br><pre>           If you deposit <mark>' + p + '<\mark>,<\pre><pre>           at an interest of <mark>' + r + '%.<\pre><pre>           You will receive an amount of <mark>' + si + '<\mark>,<\pre>           in the year <mark>' + 202 + y;



}