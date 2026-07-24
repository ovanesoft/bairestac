/* Destino del formulario de contacto: el número de WhatsApp de BairesTac.
   Va sin "+", espacios ni guiones, que es como lo espera wa.me.
   Si cambia el número hay que actualizarlo también en los dos enlaces
   de index.html (la sección Contacto y el botón flotante). */
const WHATSAPP_NUMBER = '5492323485301';

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Navbar: fondo al hacer scroll ---------- */
    const navbar = document.getElementById('navbar');
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Menú mobile ---------- */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    const closeMenu = () => {
        navLinks.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
    };

    hamburger.addEventListener('click', () => {
        const willOpen = !navLinks.classList.contains('is-open');
        navLinks.classList.toggle('is-open', willOpen);
        hamburger.classList.toggle('is-open', willOpen);
        hamburger.setAttribute('aria-expanded', String(willOpen));
    });

    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeMenu();
    });

    /* ---------- Animaciones al entrar en viewport ---------- */
    const animated = document.querySelectorAll('.fade-up');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animated.forEach(el => el.classList.add('visible'));
    } else {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        animated.forEach(el => observer.observe(el));
    }

    /* ---------- Tabs de especificaciones técnicas ---------- */
    const specsBtns = document.querySelectorAll('.specs-tab-btn');
    const specsPanes = document.querySelectorAll('.specs-pane');

    specsBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            specsBtns.forEach(b => {
                b.classList.remove('is-active');
                b.setAttribute('aria-selected', 'false');
            });
            specsPanes.forEach(p => p.classList.remove('is-active'));

            btn.classList.add('is-active');
            btn.setAttribute('aria-selected', 'true');
            document.getElementById(btn.dataset.specs).classList.add('is-active');
        });
    });

    /* ---------- Acordeón de preguntas frecuentes ---------- */
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.closest('.faq-item');
            const wasOpen = item.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(other => {
                other.classList.remove('active');
                other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            if (!wasOpen) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

    /* ---------- Enlace activo en la navegación según la sección visible ---------- */
    const sections = document.querySelectorAll('main section[id], main header[id]');
    const navAnchors = navLinks.querySelectorAll('a[href^="#"]');

    if (sections.length) {
        const spy = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                navAnchors.forEach(a => {
                    a.classList.toggle('is-current', a.getAttribute('href') === '#' + entry.target.id);
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        sections.forEach(s => spy.observe(s));
    }

    /* ---------- Formulario de contacto ----------
       No hay servidor detrás de esta página, así que el formulario no
       "envía" nada por sí solo: arma el mensaje con lo que cargó el
       visitante y abre WhatsApp con el texto ya escrito. El visitante
       da el último toque de enviar desde su propia cuenta. */
    const form = document.getElementById('contactForm');
    const statusEl = document.getElementById('formStatus');

    const showStatus = (messageKey, state) => {
        statusEl.textContent = t(messageKey);
        statusEl.className = 'form-status is-' + state;
    };

    /* Arma el mensaje en el idioma en que el visitante está viendo la página.
       Las líneas opcionales se omiten si el campo quedó vacío. */
    const buildMessage = (data) => {
        const lines = [t('form.waIntro'), ''];

        lines.push(t('form.name') + ': ' + data.nombre);
        if (data.empresa) lines.push(t('form.company') + ': ' + data.empresa);
        if (data.email) lines.push(t('form.email') + ': ' + data.email);
        if (data.telefono) lines.push(t('form.phone') + ': ' + data.telefono);
        lines.push(t('form.country') + ': ' + data.pais);
        lines.push(t('form.interest') + ': ' + data.interes);
        lines.push('', t('form.message') + ':', data.mensaje);

        return lines.join('\n');
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const data = {
            nombre: form.elements['Nombre'].value.trim(),
            empresa: form.elements['Empresa'].value.trim(),
            email: form.elements['email'].value.trim(),
            telefono: form.elements['Teléfono'].value.trim(),
            pais: form.elements['País'].value,
            interes: form.elements['Interés'].value,
            mensaje: form.elements['Mensaje'].value.trim()
        };

        if (!data.nombre || !data.mensaje) {
            showStatus('form.errRequired', 'error');
            (data.nombre ? form.elements['Mensaje'] : form.elements['Nombre']).focus();
            return;
        }

        // El email es opcional, pero si lo cargaron conviene que sea usable.
        if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) {
            showStatus('form.errEmail', 'error');
            form.elements['email'].focus();
            return;
        }

        // El honeypot solo lo completa un bot: no abrimos nada.
        if (form.elements['_honey'].value) return;

        const url = 'https://wa.me/' + WHATSAPP_NUMBER +
            '?text=' + encodeURIComponent(buildMessage(data));

        // Se abre dentro del click del usuario, así que el navegador no
        // debería bloquearlo. Si igual lo bloquea, dejamos el enlace a mano.
        const ventana = window.open(url, '_blank', 'noopener');

        if (ventana) {
            showStatus('form.waOpened', 'success');
            form.reset();
        } else {
            showStatus('form.waBlocked', 'error');
            const enlace = document.createElement('a');
            enlace.href = url;
            enlace.target = '_blank';
            enlace.rel = 'noopener';
            enlace.textContent = t('form.waOpenHere');
            statusEl.append(' ', enlace);
        }
    });
});
