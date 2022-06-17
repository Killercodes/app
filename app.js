
if ("serviceWorker" in navigator) {
    //window.addEventListener("load", function() {
      navigator.serviceWorker.register("appWorker.js")
        .then(res => console.log("appWorker.js service registered !"))
        .catch(err => console.log("appWorker.js service not registered", err))
    //})
  }
