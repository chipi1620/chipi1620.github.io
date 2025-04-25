// script.js

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn-primary');
    if (btn) {
      btn.addEventListener('click', () => {
        alert('Gracias por tu interés. Nos pondremos en contacto contigo pronto.');
      });
    }
  });
  
    // TODO: Enviar datos a tu servidor o API
    alert('¡Gracias! Tu solicitud ha sido enviada.');
    e.target.reset();
  });
  
  // Integración de chat en vivo (ejemplo con Tawk.to)
  (function() {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/default'; // Reemplaza YOUR_PROPERTY_ID
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  })();
  