export default function swDev(){
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            let swUrl = `${process.env.PUBLIC_URL}/sw.js`
          navigator.serviceWorker.register(swUrl).then(function(registration) {
            console.log('Worker registration successful', registration.scope);
          }, function(err) {
            console.log('Worker registration failed', err);
          }).catch(function(err) {
            console.log(err);
          });
        });
      } else {
        console.log('Service Worker is not supported by browser.');
      }
    }