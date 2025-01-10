// self.addEventListener("fetch", (event) => {
//   if (event.request.mode === "navigate") {
//     event.respondWith(
//       caches.match("/index.html").then((cached) => {
//         return cached || fetch("/index.html");
//       })
//     );
//   }
// });

// <script>
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("/sw.js").catch((err) => {
//     console.error("Service Worker registration failed:", err);
//   });
// }
// </script>
