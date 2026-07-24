/* Destino del formulario de contacto.
   FormSubmit reenvía la consulta a esta casilla. La primera vez que alguien
   envía el formulario, FormSubmit manda un mail de activación a esta dirección:
   hay que abrirlo y hacer clic una sola vez para habilitar el envío. */
const CONTACT_EMAIL = 'bairestacsrl@gmail.com';
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/' + CONTACT_EMAIL;

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

    /* ---------- Formulario de contacto ---------- */
    const form = document.getElementById('contactForm');
    const statusEl = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    const showStatus = (messageKey, state) => {
        statusEl.textContent = t(messageKey);
        statusEl.className = 'form-status is-' + state;
    };

    const setLoading = (isLoading) => {
        submitBtn.disabled = isLoading;
        submitBtn.classList.toggle('is-loading', isLoading);
        submitBtn.querySelector('.btn-label').textContent = t(isLoading ? 'form.sending' : 'form.submit');
    };

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nombre = form.elements['Nombre'].value.trim();
        const email = form.elements['email'].value.trim();
        const mensaje = form.elements['Mensaje'].value.trim();

        if (!nombre || !email || !mensaje) {
            showStatus('form.errRequired', 'error');
            (!nombre ? form.elements['Nombre'] : !email ? form.elements['email'] : form.elements['Mensaje']).focus();
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
            showStatus('form.errEmail', 'error');
            form.elements['email'].focus();
            return;
        }

        // El honeypot solo lo completa un bot: si trae texto, fingimos éxito y no enviamos.
        if (form.elements['_honey'].value) {
            showStatus('form.success', 'success');
            form.reset();
            return;
        }

        setLoading(true);
        statusEl.textContent = '';
        statusEl.className = 'form-status';

        const payload = {
            Nombre: nombre,
            Empresa: form.elements['Empresa'].value.trim(),
            email: email,
            'Teléfono': form.elements['Teléfono'].value.trim(),
            'País': form.elements['País'].value,
            'Interés': form.elements['Interés'].value,
            Mensaje: mensaje,
            _subject: 'Nueva consulta desde bairestac.com — ' + nombre,
            _template: 'table',
            _captcha: 'false'
        };

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error('HTTP ' + response.status);

            showStatus('form.success', 'success');
            form.reset();
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            showStatus('form.errSend', 'error');
        } finally {
            setLoading(false);
        }
    });
});
