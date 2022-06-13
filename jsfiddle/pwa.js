
if ("serviceWorker" in navigator) {
    //window.addEventListener("load", function() {
      navigator.serviceWorker.register("jsfiddleWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    //})
  }


  //var canvas = document.getElementById('doc');
  var textarea = document.getElementById('code');
  var reset = document.getElementById('reset');
  var edit = document.getElementById('edit');
  var render = document.getElementById('render');
  var code = textarea.value;
  var iframe = document.getElementById('doc');
  iframe.id = "doc";
  var script = iframe.contentWindow.document.createElement('script');
  script.innerText = `function code(msg) { var p = document.createElement('code'); p.innerHTML = msg; document.body.appendChild(p);}`;
  iframe.contentWindow.document.body.appendChild(script);

  function drawCanvas() {
    var html = `<head>
      
      </head>
      <body>
      ${textarea.value}
      </body>`;
    //document.body.appendChild(iframe);

    iframe.contentWindow.document.open();

    iframe.contentWindow.document.write(html);
    iframe.contentWindow.document.close();


    //eval(textarea.value);
  }
  /*
  reset.addEventListener('click', function() {
      textarea.value = "";
      
  });*/

  /*
  edit.addEventListener('click', function () {
    textarea.focus();
    //textarea.style.height = "100%";
    //textarea.style.display= "block";
  });
  */

  render.addEventListener('click', function () {
    //textarea.style.height = "0px";
    //textarea.style.display= "none";
    drawCanvas();
  });

  //textarea.addEventListener('input', drawCanvas);
  //window.addEventListener('load', drawCanvas);
