/* Tienda: ficha de producto y botón Comprar.
   No hay pago online: "Comprar" abre WhatsApp con la consulta ya escrita
   hacia el mismo número que usa el resto del sitio (WHATSAPP_NUMBER,
   definido en script.js). */

document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('productModal');
    const panels = document.querySelectorAll('.pd');

    /* ---------- Botones Comprar ---------- */
    const buildBuyUrl = (nombre, precio) => {
        const texto = nombre
            ? t('store.waMsg').replace('{producto}', nombre).replace('{precio}', precio)
            : t('store.waMsgGeneric');
        return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(texto);
    };

    document.addEventListener('click', (event) => {
        const boton = event.target.closest('.btn-buy');
        if (!boton) return;

        event.preventDefault();
        window.open(buildBuyUrl(boton.dataset.name, boton.dataset.price), '_blank', 'noopener');
    });

    /* ---------- Ficha de producto ----------
       Los paneles ya están en el DOM: abrir uno es mostrarlo y ocultar el
       resto, así no hace falta clonar nodos ni duplicar traducciones. */
    if (!modal) return;

    let disparador = null;

    const abrir = (clave) => {
        panels.forEach(p => { p.hidden = p.dataset.pd !== clave; });
        modal.showModal();
        modal.scrollTop = 0;
        document.body.classList.add('modal-open');
    };

    const cerrar = () => {
        if (modal.open) modal.close();
    };

    document.querySelectorAll('.btn-detail').forEach(btn => {
        btn.addEventListener('click', () => {
            disparador = btn;
            abrir(btn.dataset.pd);
        });
    });

    document.getElementById('pdClose').addEventListener('click', cerrar);

    // Clic en el fondo oscuro, fuera de la tarjeta
    modal.addEventListener('click', (event) => {
        if (event.target === modal) cerrar();
    });

    // Al cerrar (botón, fondo o Escape) devolvemos el foco a donde estaba
    modal.addEventListener('close', () => {
        document.body.classList.remove('modal-open');
        panels.forEach(p => { p.hidden = true; });
        if (disparador) {
            disparador.focus();
            disparador = null;
        }
    });

    /* ---------- Galería: la miniatura cambia la imagen grande ---------- */
    panels.forEach(panel => {
        const principal = panel.querySelector('.pd-main');
        const miniaturas = panel.querySelectorAll('.pd-thumb');

        miniaturas.forEach(thumb => {
            thumb.addEventListener('click', () => {
                const img = thumb.querySelector('img');
                principal.src = img.src;
                principal.alt = img.alt;
                miniaturas.forEach(t => t.classList.remove('is-active'));
                thumb.classList.add('is-active');
            });
        });
    });
});
