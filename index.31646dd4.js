function e(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");t.className="message",n&&t.classList.add("error-message"),t.textContent=e,document.body.appendChild(t)}var n=new Promise(function(e){document.querySelector(".logo").addEventListener("click",function(){e()})}),t=new Promise(function(e,n){setTimeout(function(){n(Error)},3e3)});n.then(function(){e("Promise was resolved!")}),t.catch(function(){e("Promise was rejected!",!0)});
//# sourceMappingURL=index.31646dd4.js.map
