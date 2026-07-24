/**
 * Sistema de traducción ES / EN.
 *
 * Cada texto traducible del HTML lleva uno de estos atributos:
 *   data-i18n="clave"                -> reemplaza el contenido del elemento
 *   data-i18n-placeholder="clave"    -> reemplaza el placeholder
 *   data-i18n-content="clave"        -> reemplaza el atributo content (meta tags)
 *   data-i18n-aria-label="clave"     -> reemplaza el aria-label
 *
 * Para agregar un texto nuevo: poné el atributo en el HTML y sumá la clave
 * en los dos diccionarios de abajo.
 */

const I18N = {
    es: {
        'meta.title': 'BairesTac | Soluciones integrales para la atención de emergencias',
        'meta.description': 'Empresa argentina especializada en soluciones integrales para emergencias prehospitalarias, medicina táctica y control de hemorragias. Representantes oficiales de OHK Medical, SAM Medical y North American Rescue.',

        'a11y.skip': 'Saltar al contenido principal',
        'a11y.langGroup': 'Seleccionar idioma',
        'a11y.menu': 'Abrir menú de navegación',
        'a11y.specsTabs': 'Especificaciones técnicas por producto',
        'a11y.whatsapp': 'Escribinos por WhatsApp',

        'nav.inicio': 'Inicio',
        'nav.nosotros': 'Nosotros',
        'nav.soluciones': 'Soluciones',
        'nav.portafolio': 'Portafolio',
        'nav.ambitos': 'Ámbitos',
        'nav.capacitacion': 'Capacitación',
        'nav.contacto': 'Contacto',

        'hero.badge': 'Representantes oficiales · Cono Sur',
        'hero.title': 'Cuando cada segundo <span class="text-orange">define el resultado</span>',
        'hero.lead': 'Soluciones integrales para la atención de emergencias prehospitalarias, medicina táctica y control de hemorragias. Equipamiento de última generación, capacitación especializada y asesoramiento técnico.',
        'hero.ctaPrimary': 'Ver portafolio',
        'hero.ctaSecondary': 'Contactar un asesor',
        'hero.brandsLabel': 'Representantes oficiales de:',

        'about.eyebrow': '01 — Nosotros',
        'about.title': 'Quiénes <span class="text-orange">somos</span>',
        'about.p1': 'Baires TAC es una empresa argentina especializada en soluciones integrales para la atención de emergencias prehospitalarias, medicina táctica y control de hemorragias.',
        'about.p2': 'Como representantes oficiales de tecnologías médicas de reconocimiento internacional, acercamos al Cono Sur equipamiento de última generación respaldado por evidencia científica, certificaciones internacionales y los más altos estándares de calidad.',
        'about.p3': 'Complementamos nuestra propuesta con capacitación especializada y asesoramiento técnico, acompañando a instituciones de salud, fuerzas de seguridad, industrias y organizaciones que requieren soluciones confiables para responder eficazmente ante situaciones críticas.',
        'about.p4': 'En Baires TAC entendemos que cada decisión puede marcar la diferencia en una emergencia. Por eso trabajamos para ofrecer no solo productos de excelencia, sino también el conocimiento y el respaldo necesarios para que nuestros clientes actúen con seguridad cuando más importa.',
        'about.missionTag': 'Misión',
        'about.missionTitle': 'Nuestra Misión',
        'about.missionText': 'Brindar soluciones integrales para la atención de emergencias mediante la distribución de equipamiento médico de excelencia, la capacitación especializada y el asesoramiento técnico, contribuyendo a mejorar la preparación y la capacidad de respuesta de los profesionales que intervienen en situaciones críticas.',
        'about.visionTag': 'Visión',
        'about.visionTitle': 'Nuestra Visión',
        'about.visionText': 'Ser la empresa referente del Cono Sur en equipamiento médico, medicina táctica y capacitación para emergencias, reconocida por representar marcas líderes a nivel mundial, impulsar la innovación y generar un impacto positivo en la atención de pacientes y la preservación de la vida.',

        'solutions.eyebrow': '02 — Soluciones',
        'solutions.title': 'Soluciones integrales: equipamiento, capacitación y <span class="text-orange">asesoramiento</span>',
        'solutions.lead': 'En Baires TAC desarrollamos soluciones integrales para la atención de emergencias, combinando equipamiento médico especializado, capacitación profesional y asesoramiento técnico. Nuestro objetivo es acompañar a cada organización con herramientas, conocimientos y soporte que fortalezcan su capacidad de respuesta ante situaciones críticas.',
        'solutions.p1Title': 'Equipamiento médico especializado',
        'solutions.p1a': 'Como representantes oficiales para el Cono Sur de OHK Medical, SAM Medical y North American Rescue (NAR), acercamos tecnologías de referencia internacional para medicina táctica, atención prehospitalaria y control de hemorragias.',
        'solutions.p1b': 'Nuestro portafolio reúne soluciones respaldadas por evidencia científica, certificaciones internacionales y los más altos estándares de calidad, ofreciendo a profesionales e instituciones acceso a equipamiento confiable para escenarios de alta exigencia.',
        'solutions.p2Title': 'Capacitación y formación profesional',
        'solutions.p2a': 'Baires TAC desarrolla programas de capacitación práctica destinados a profesionales de la salud, brigadas de emergencia, personal de seguridad e higiene, fuerzas de seguridad, industrias y organizaciones que requieren una preparación eficaz para actuar en situaciones críticas.',
        'solutions.p2b': 'Nuestra propuesta incluye formación en control de hemorragias, manejo inicial del trauma, medicina táctica y atención prehospitalaria, con programas certificados por la Sociedad Argentina de Medicina Táctica (SAMT) y otras instituciones estratégicas.',
        'solutions.p3Title': 'Asesoramiento y soporte técnico',
        'solutions.p3a': 'Acompañamos a nuestros clientes en la evaluación, selección e implementación de soluciones adaptadas a las necesidades específicas de cada operación.',
        'solutions.p3b': 'Brindamos asesoramiento técnico para la provisión integral de equipamiento, recomendaciones según el perfil de riesgo de cada organización y soporte especializado para garantizar la correcta incorporación y utilización de cada solución.',
        'solutions.closing': 'Cada proyecto es abordado de manera integral, combinando tecnología, formación y acompañamiento técnico para ofrecer soluciones confiables, eficientes y adaptadas a las necesidades de cada cliente.',

        'portfolio.eyebrow': '03 — Portafolio',
        'portfolio.title': 'Portafolio <span class="text-orange">tecnológico</span>',
        'portfolio.lead': 'Nuestra selección de insumos de clase mundial, diseñados para salvar vidas en la "hora dorada".',
        'portfolio.p1Badge': 'Producto estrella',
        'portfolio.p1Desc': 'Torniquete de auto-transfusión de emergencia. Desplaza más de 1.000 cc de sangre autóloga en menos de 30 segundos.',
        'portfolio.p1f1': 'Hipotensión severa',
        'portfolio.p1f2': 'Paro cardíaco (adjunto a RCP)',
        'portfolio.p1f3': 'Shock hemorrágico severo',
        'portfolio.ctaQuote': 'Solicitar cotización',
        'portfolio.p2Desc': 'Torniquete quirúrgico estéril. Permite un campo operatorio exsangüe. Usado en más de 1.2M de cirugías a nivel global.',
        'portfolio.p2f1': 'Cirugía ortopédica de extremidades',
        'portfolio.p2f2': 'Campo visual limpio y sin sangre',
        'portfolio.p2f3': 'Fácil aplicación en quirófano',
        'portfolio.ctaAvail': 'Consultar disponibilidad',
        'portfolio.p3Desc': 'Línea completa de insumos de medicina táctica, vendajes hemostáticos, férulas y kits de trauma.',
        'portfolio.p3f1': 'SAM Splint, SAM XT',
        'portfolio.p3f2': 'Vendajes NAR, C-A-T',
        'portfolio.p3f3': 'Insumos para algoritmos MARCH/PAWS',
        'portfolio.ctaCatalog': 'Ver catálogo completo',

        'specs.mechanism': 'Mecanismo',
        'specs.volume': 'Volumen desplazado',
        'specs.pressure': 'Presión de oclusión',
        'specs.safety': 'Tiempo de seguridad',
        'specs.indications': 'Indicaciones clínicas',
        'specs.certs': 'Certificaciones',
        'specs.hs.mechanism': 'Sistema de desplazamiento centrífugo de sangre con compresión externa controlada.',
        'specs.hs.volume': '1.000 - 1.200 cc de sangre autóloga en menos de 30 segundos.',
        'specs.hs.pressure': '180-220 mmHg (arterial), titulables según necesidad clínica.',
        'specs.hs.safety': 'Aplicación segura por hasta 120 minutos sin daño tisular.',
        'specs.hs.indications': 'Shock hemorrágico, hipotensión severa, paro cardíaco + RCP, trauma penetrante exanguinante.',
        'specs.hs.certs': 'FDA 510(k), CE Mark, validación clínica en más de 18 publicaciones peer-reviewed.',
        'specs.design': 'Diseño',
        'specs.field': 'Campo exsangüe',
        'specs.material': 'Material',
        'specs.compat': 'Compatibilidad',
        'specs.ischemia': 'Tiempo de isquemia',
        'specs.validation': 'Validación',
        'specs.hc.design': 'Torniquete estéril de un solo uso, ergonómico y de rápida aplicación.',
        'specs.hc.field': 'Línea isquémica clara en menos de 90 segundos, sin sangrado de bordes.',
        'specs.hc.material': 'Silicona médica hipoalergénica, resistente a fluidos corporales y antisépticos.',
        'specs.hc.compat': 'Extremidades superiores e inferiores; cirugía ortopédica, plástica y vascular.',
        'specs.hc.ischemia': 'Seguro hasta 180 minutos en extremidades sin documentación de complicaciones.',
        'specs.hc.validation': 'Utilizado en más de 1.2M de procedimientos; ISO 13485, CE Mark Clase IIA.',
        'specs.samLine': 'Línea SAM',
        'specs.narLine': 'Línea NAR',
        'specs.algorithms': 'Algoritmos',
        'specs.stock': 'Capacidad de stock',
        'specs.certs2': 'Certificaciones',
        'specs.training': 'Entrenamiento',
        'specs.nar.samLine': 'SAM Splint, SAM XT, férulas de vacío y tablillas modulares para inmovilización.',
        'specs.nar.narLine': 'Vendajes hemostáticos (Combat Gauze, QuikClot), torniquetes C-A-T, kits C-TECC.',
        'specs.nar.algorithms': 'Compatibilidad total con MARCH (Massive bleeding, Airway, Respiration, Circulation, Hypothermia) y PAWS.',
        'specs.nar.stock': 'Disponibilidad en distribución directa y kits personalizados según protocolos institucionales.',
        'specs.nar.certs': 'Equipamiento estándar en operaciones militares OTAN, FBI-HRT, MARSOC, DEA-SRT.',
        'specs.nar.training': 'Cursos de aplicación rápida, compatibles con TCCC/TECC, en menos de 8 horas de capacitación.',

        'fields.eyebrow': '04 — Ámbitos',
        'fields.title': 'Ámbitos de <span class="text-orange">aplicación</span>',
        'fields.lead': 'Las soluciones que integran el portafolio de Baires TAC están diseñadas para adaptarse a una amplia variedad de entornos donde la preparación, la capacidad de respuesta y el acceso a equipamiento especializado resultan fundamentales. Acompañamos a organizaciones y profesionales con tecnologías, capacitación y asesoramiento orientados a las necesidades específicas de cada ámbito de aplicación.',
        'fields.f1Title': 'Hospitales y clínicas',
        'fields.f1Text': 'Soluciones para el manejo del trauma, control de hemorragias y fortalecimiento de la respuesta ante emergencias intrahospitalarias y prehospitalarias.',
        'fields.f2Title': 'Servicios de emergencias médicas',
        'fields.f2Text': 'Equipamiento destinado a optimizar la atención inicial del paciente y la respuesta en escenarios de emergencia y rescate.',
        'fields.f3Title': 'Industria',
        'fields.f3Text': 'Tecnologías orientadas a brigadas de emergencia, servicios médicos internos, áreas de seguridad e higiene y respuesta ante incidentes en entornos industriales.',
        'fields.f4Title': 'Energía y recursos naturales',
        'fields.f4Text': 'Soluciones para operaciones desarrolladas en entornos de alta exigencia, donde la preparación y la respuesta inmediata resultan esenciales.',
        'fields.f5Title': 'Bomberos y protección civil',
        'fields.f5Text': 'Equipamiento especializado para tareas de rescate, atención prehospitalaria y control de hemorragias durante la respuesta a emergencias.',
        'fields.f6Title': 'Fuerzas de seguridad',
        'fields.f6Text': 'Tecnologías destinadas a la medicina táctica y la atención inicial en operaciones donde la intervención rápida puede resultar determinante.',
        'fields.f7Title': 'Fuerzas armadas',
        'fields.f7Text': 'Equipamiento diseñado para apoyar la atención prehospitalaria y el manejo inicial del trauma en distintos escenarios operativos.',
        'fields.f8Title': 'Capacitación y entrenamiento',
        'fields.f8Text': 'Recursos para instituciones y organizaciones que buscan fortalecer la preparación de sus equipos mediante programas de formación, simulación y entrenamiento práctico.',
        'fields.ctaTitle': '¿Cómo podemos acompañar a tu organización?',
        'fields.ctaP1': 'Cada organización enfrenta desafíos diferentes y requiere soluciones acordes a su realidad operativa. En Baires TAC creemos que la combinación de tecnología, capacitación y asesoramiento técnico es la base para construir una respuesta más segura, eficiente y preparada ante situaciones críticas.',
        'fields.ctaP2': 'Nuestro equipo está disponible para brindar más información y responder cualquier consulta sobre nuestras soluciones y servicios.',
        'fields.ctaBtn': 'Hablemos',

        'training.eyebrow': '05 — Capacitación',
        'training.title': 'Capacitación y <span class="text-olive">formación profesional</span>',
        'training.lead': 'En alianza con la Sociedad Argentina de Medicina Táctica (SAMT) y Australis Group / SETEC, BairesTac ofrece formación de élite al personal de primera línea.',
        'training.i1Title': 'Control de hemorragias:',
        'training.i1Text': 'Básico y avanzado para seguridad física y civil.',
        'training.i2Title': 'Formación de instructores:',
        'training.i2Text': 'Programa de certificación oficial en el Cono Sur.',
        'training.cta': 'Consultar próximos cursos',

        'stats.title': 'Impacto clínico comprobado',
        'stats.lead': 'Números que demuestran la efectividad de nuestras soluciones en contextos reales.',
        'stats.s1Label': 'Procedimientos quirúrgicos',
        'stats.s1Text': 'Torniquetes HemaClear® utilizados globalmente en cirugía.',
        'stats.s2Label': 'Reducción de mortalidad',
        'stats.s2Text': 'En trauma severo con aplicación de HemaShock™ vs estándar.',
        'stats.s3Number': '30 seg',
        'stats.s3Label': 'Tiempo de acción',
        'stats.s3Text': 'HemaShock™ desplaza 1000 cc de sangre en menos de 30 segundos.',
        'stats.s4Label': 'Tasa de éxito',
        'stats.s4Text': 'En estabilización hemodinámica pre-quirúrgica reportada en literatura.',

        'stories.title': 'Casos de éxito',
        'stories.lead': 'Historias reales de vidas salvadas en el Cono Sur.',
        'stories.ctx': 'Contexto:',
        'stories.app': 'Aplicación:',
        'stories.res': 'Resultado:',
        'stories.c1Title': 'Hospital traumatológico central',
        'stories.c1Ctx': 'Trauma penetrante de tórax con shock hemorrágico refractario.',
        'stories.c1App': 'HemaShock™ A-TT durante 45 minutos pre-quirúrgico.',
        'stories.c1Res': 'Paciente estabilizado, supervivencia y reinserción laboral completa. Evitó transfusión masiva.',
        'stories.c1Loc': 'Argentina — 2024',
        'stories.c2Title': 'Operación táctica combinada',
        'stories.c2Ctx': 'Operador herido con hemorragia exanguinante de muslo.',
        'stories.c2App': 'NAR C-A-T + vendaje hemostático en teatro (CUF).',
        'stories.c2Res': 'Control de hemorragia en menos de 3 minutos, evacuación segura, recuperación total sin amputación.',
        'stories.c2Loc': 'Región Sur — 2024',
        'stories.c3Title': 'Cirugía ortopédica de emergencia',
        'stories.c3Ctx': 'Fractura expuesta con importantes daños vasculares.',
        'stories.c3App': 'HemaClear® S-TT para campo exsangüe en quirófano.',
        'stories.c3Res': 'Procedimiento de 2.5 h sin sangrado, preservación funcional completa del miembro.',
        'stories.c3Loc': 'Chile — 2024',
        'stories.c4Title': 'Respuesta médica de incidente masivo',
        'stories.c4Ctx': '8 víctimas de accidente vial con trauma severo múltiple.',
        'stories.c4App': 'Kits NAR con vendajes hemostáticos y algoritmo MARCH.',
        'stories.c4Res': '100% de sobrevida en sitio y hospital, mejora de 4 puntos en scores de resiliencia.',
        'stories.c4Loc': 'Uruguay — 2024',

        'certs.title': 'Certificaciones y validaciones <span class="text-orange">internacionales</span>',
        'certs.lead': 'Nuestros productos cumplen los más altos estándares de seguridad y eficacia globales.',
        'certs.c1': 'Aprobación de dispositivo médico de la Administración de Drogas y Alimentos de EE.UU. Conformidad con estándares de seguridad precomercialización.',
        'certs.c2Title': 'CE Mark (Unión Europea)',
        'certs.c2': 'Conformidad con la Directiva de Dispositivos Médicos (MDR 2017/745). Auditoría independiente y validación clínica completa.',
        'certs.c3': 'Sistema de gestión de calidad para dispositivos médicos. Trazabilidad, control de cambios y gestión de riesgos.',
        'certs.c4Title': 'Publicaciones clínicas',
        'certs.c4': 'Respaldo científico en Journal of Trauma, Resuscitation y Prehospital Emergency Care. Más de 18 estudios peer-reviewed.',

        'faq.title': 'Preguntas frecuentes',
        'faq.lead': 'Resolvemos las dudas más comunes sobre nuestros productos y servicios.',
        'faq.q1': '¿Cuál es la diferencia entre HemaShock™ y HemaClear®?',
        'faq.a1': '<strong>HemaShock™ (A-TT)</strong> es un torniquete de emergencia que desplaza sangre autóloga masivamente para restaurar presión arterial en shock hemorrágico. <strong>HemaClear® (S-TT)</strong> es un torniquete quirúrgico estéril para crear un campo exsangüe durante cirugía. Usos completamente diferentes, ambos esenciales.',
        'faq.q2': '¿Cuánto tiempo puedo mantener el torniquete aplicado?',
        'faq.a2': 'HemaShock™: seguro hasta 120 minutos sin riesgo de necrosis tisular. HemaClear®: hasta 180 minutos en extremidades. Ambos productos incluyen protocolos de monitoreo de isquemia y cuidados post-aplicación.',
        'faq.q3': '¿Necesito entrenamiento especial para usar estos productos?',
        'faq.a3': 'Sí. BairesTac ofrece capacitación en control de hemorragias, básica y avanzada, y un programa de formación de instructores con certificación oficial en el Cono Sur. HemaShock™ requiere entrenamiento médico avanzado. Ofrecemos instructores in situ y formación de capacitadores locales.',
        'faq.q4': '¿Cuáles son las contraindicaciones principales?',
        'faq.a4': 'HemaShock™: no usar en hipovolemia sin hemorragia activa, fallo cardíaco severo, o presión sistólica basal mayor a 160 mmHg. HemaClear®: no usar en isquemia preexistente o trastornos vasculares severos. Consulte siempre a su médico responsable.',
        'faq.q5': '¿Cómo es la logística de entrega en el Cono Sur?',
        'faq.a5': 'Trabajamos con Australis Group y SETEC. Entregas en Argentina, Chile, Uruguay, Paraguay, Bolivia y Brasil en 5-10 días hábiles. Almacenes locales en las principales ciudades. Transporte refrigerado para productos que lo requieran.',
        'faq.q6': '¿Ofrecen garantía o servicio técnico post-venta?',
        'faq.a6': 'Sí. Garantía de 2 años contra defectos de fabricación. Línea de soporte técnico 24/7. Repuestos y mantenimiento disponibles. Auditoría de uso y reportes de eficacia para instituciones.',

        'contact.eyebrow': '06 — Contacto',
        'contact.title': '¿Te interesa recibir <span class="text-orange">más información</span>?',
        'contact.lead': 'Si querés conocer más sobre nuestro equipamiento, coordinar una capacitación, realizar una consulta técnica o evaluar una solución para tu organización, podés dejarnos tu mensaje a través del formulario o comunicarte directamente con nosotros.',
        'contact.emailLabel': 'Correo electrónico',
        'contact.waLabel': 'WhatsApp',
        'contact.whyTitle': 'Por qué elegirnos',
        'contact.why1': 'Representación oficial de marcas líderes a nivel mundial',
        'contact.why2': 'Respaldo técnico y científico especializado',
        'contact.why3': 'Certificaciones internacionales (FDA / CE)',
        'contact.why4': 'Evidencia clínica publicada globalmente',
        'contact.why5': 'Red logística robusta en todo el Cono Sur',
        'contact.alliesTitle': 'Nuestros aliados',

        'form.name': 'Nombre y apellido',
        'form.namePh': 'Ej. Juan Pérez',
        'form.company': 'Empresa / Institución',
        'form.companyPh': 'Ej. Hospital Municipal',
        'form.email': 'Email',
        'form.emailPh': 'nombre@empresa.com',
        'form.phone': 'Teléfono',
        'form.country': 'País',
        'form.countryBrazil': 'Brasil',
        'form.countryOther': 'Otro',
        'form.interest': 'Interés principal',
        'form.int1': 'Equipamiento médico',
        'form.int2': 'Capacitación y formación',
        'form.int3': 'Asesoramiento técnico',
        'form.int4': 'Oportunidad de distribución',
        'form.int5': 'Otra consulta',
        'form.message': 'Mensaje o consulta',
        'form.messagePh': 'Escribí tu consulta...',
        'form.submit': 'Enviar por WhatsApp',
        'form.waIntro': 'Hola BairesTac, les escribo desde la web.',
        'form.waOpened': 'Te abrimos WhatsApp con la consulta ya escrita. Solo falta que toques enviar.',
        'form.waBlocked': 'El navegador bloqueó la ventana de WhatsApp.',
        'form.waOpenHere': 'Abrir WhatsApp',
        'form.errRequired': 'Completá al menos tu nombre y la consulta.',
        'form.errEmail': 'Revisá el email: el formato no parece válido.',

        'footer.tagline': 'Soluciones integrales para la atención de emergencias, medicina táctica y control de hemorragias en el Cono Sur.',
        'footer.rights': '© 2026 BairesTac. Todos los derechos reservados.'
    },

    en: {
        'meta.title': 'BairesTac | Integrated solutions for emergency care',
        'meta.description': 'Argentine company specialising in integrated solutions for prehospital emergency care, tactical medicine and bleeding control. Official representatives of OHK Medical, SAM Medical and North American Rescue.',

        'a11y.skip': 'Skip to main content',
        'a11y.langGroup': 'Select language',
        'a11y.menu': 'Open navigation menu',
        'a11y.specsTabs': 'Technical specifications by product',
        'a11y.whatsapp': 'Message us on WhatsApp',

        'nav.inicio': 'Home',
        'nav.nosotros': 'About',
        'nav.soluciones': 'Solutions',
        'nav.portafolio': 'Portfolio',
        'nav.ambitos': 'Sectors',
        'nav.capacitacion': 'Training',
        'nav.contacto': 'Contact',

        'hero.badge': 'Official representatives · Southern Cone',
        'hero.title': 'When every second <span class="text-orange">defines the outcome</span>',
        'hero.lead': 'Integrated solutions for prehospital emergency care, tactical medicine and bleeding control. State-of-the-art equipment, specialised training and technical advisory.',
        'hero.ctaPrimary': 'View portfolio',
        'hero.ctaSecondary': 'Talk to an advisor',
        'hero.brandsLabel': 'Official representatives of:',

        'about.eyebrow': '01 — About us',
        'about.title': 'Who <span class="text-orange">we are</span>',
        'about.p1': 'Baires TAC is an Argentine company specialising in integrated solutions for prehospital emergency care, tactical medicine and bleeding control.',
        'about.p2': 'As official representatives of internationally recognised medical technologies, we bring state-of-the-art equipment to the Southern Cone, backed by scientific evidence, international certifications and the highest quality standards.',
        'about.p3': 'We complement our offering with specialised training and technical advisory, supporting healthcare institutions, security forces, industry and organisations that require reliable solutions to respond effectively in critical situations.',
        'about.p4': 'At Baires TAC we understand that every decision can make the difference in an emergency. That is why we work to deliver not only outstanding products, but also the knowledge and support our clients need to act with confidence when it matters most.',
        'about.missionTag': 'Mission',
        'about.missionTitle': 'Our Mission',
        'about.missionText': 'To provide integrated solutions for emergency care through the distribution of outstanding medical equipment, specialised training and technical advisory, helping improve the preparedness and response capability of the professionals who intervene in critical situations.',
        'about.visionTag': 'Vision',
        'about.visionTitle': 'Our Vision',
        'about.visionText': 'To be the leading company in the Southern Cone in medical equipment, tactical medicine and emergency training, recognised for representing world-leading brands, driving innovation and generating a positive impact on patient care and the preservation of life.',

        'solutions.eyebrow': '02 — Solutions',
        'solutions.title': 'Integrated solutions: equipment, training and <span class="text-orange">advisory</span>',
        'solutions.lead': 'At Baires TAC we develop integrated solutions for emergency care, combining specialised medical equipment, professional training and technical advisory. Our goal is to support every organisation with the tools, knowledge and backing that strengthen its ability to respond in critical situations.',
        'solutions.p1Title': 'Specialised medical equipment',
        'solutions.p1a': 'As official representatives for the Southern Cone of OHK Medical, SAM Medical and North American Rescue (NAR), we bring internationally recognised technologies for tactical medicine, prehospital care and bleeding control.',
        'solutions.p1b': 'Our portfolio brings together solutions backed by scientific evidence, international certifications and the highest quality standards, giving professionals and institutions access to reliable equipment for highly demanding scenarios.',
        'solutions.p2Title': 'Professional training and education',
        'solutions.p2a': 'Baires TAC develops hands-on training programmes for healthcare professionals, emergency brigades, health-and-safety personnel, security forces, industry and organisations that need effective preparation to act in critical situations.',
        'solutions.p2b': 'Our offering includes training in bleeding control, initial trauma management, tactical medicine and prehospital care, with programmes certified by the Argentine Society of Tactical Medicine (SAMT) and other strategic institutions.',
        'solutions.p3Title': 'Advisory and technical support',
        'solutions.p3a': 'We support our clients in the assessment, selection and implementation of solutions tailored to the specific needs of each operation.',
        'solutions.p3b': 'We provide technical advisory for the complete supply of equipment, recommendations based on each organisation’s risk profile, and specialised support to ensure every solution is correctly adopted and used.',
        'solutions.closing': 'Every project is approached holistically, combining technology, training and technical support to deliver reliable, efficient solutions tailored to each client’s needs.',

        'portfolio.eyebrow': '03 — Portfolio',
        'portfolio.title': 'Technology <span class="text-orange">portfolio</span>',
        'portfolio.lead': 'Our selection of world-class supplies, designed to save lives during the "golden hour".',
        'portfolio.p1Badge': 'Flagship product',
        'portfolio.p1Desc': 'Emergency auto-transfusion tourniquet. Displaces over 1,000 cc of autologous blood in under 30 seconds.',
        'portfolio.p1f1': 'Severe hypotension',
        'portfolio.p1f2': 'Cardiac arrest (CPR adjunct)',
        'portfolio.p1f3': 'Severe haemorrhagic shock',
        'portfolio.ctaQuote': 'Request a quote',
        'portfolio.p2Desc': 'Sterile surgical tourniquet. Creates a bloodless operating field. Used in over 1.2M surgeries worldwide.',
        'portfolio.p2f1': 'Orthopaedic limb surgery',
        'portfolio.p2f2': 'Clean, blood-free visual field',
        'portfolio.p2f3': 'Easy application in the operating room',
        'portfolio.ctaAvail': 'Check availability',
        'portfolio.p3Desc': 'Full line of tactical medicine supplies, haemostatic dressings, splints and trauma kits.',
        'portfolio.p3f1': 'SAM Splint, SAM XT',
        'portfolio.p3f2': 'NAR dressings, C-A-T',
        'portfolio.p3f3': 'Supplies for MARCH/PAWS algorithms',
        'portfolio.ctaCatalog': 'View full catalogue',

        'specs.mechanism': 'Mechanism',
        'specs.volume': 'Displaced volume',
        'specs.pressure': 'Occlusion pressure',
        'specs.safety': 'Safe application time',
        'specs.indications': 'Clinical indications',
        'specs.certs': 'Certifications',
        'specs.hs.mechanism': 'Centrifugal blood displacement system with controlled external compression.',
        'specs.hs.volume': '1,000 - 1,200 cc of autologous blood in under 30 seconds.',
        'specs.hs.pressure': '180-220 mmHg (arterial), titratable to clinical need.',
        'specs.hs.safety': 'Safe application for up to 120 minutes without tissue damage.',
        'specs.hs.indications': 'Haemorrhagic shock, severe hypotension, cardiac arrest + CPR, exsanguinating penetrating trauma.',
        'specs.hs.certs': 'FDA 510(k), CE Mark, clinical validation in more than 18 peer-reviewed publications.',
        'specs.design': 'Design',
        'specs.field': 'Bloodless field',
        'specs.material': 'Material',
        'specs.compat': 'Compatibility',
        'specs.ischemia': 'Ischaemia time',
        'specs.validation': 'Validation',
        'specs.hc.design': 'Single-use sterile tourniquet, ergonomic and quick to apply.',
        'specs.hc.field': 'Clear ischaemic line in under 90 seconds, with no edge bleeding.',
        'specs.hc.material': 'Hypoallergenic medical silicone, resistant to body fluids and antiseptics.',
        'specs.hc.compat': 'Upper and lower limbs; orthopaedic, plastic and vascular surgery.',
        'specs.hc.ischemia': 'Safe for up to 180 minutes on limbs with no documented complications.',
        'specs.hc.validation': 'Used in over 1.2M procedures; ISO 13485, CE Mark Class IIA.',
        'specs.samLine': 'SAM line',
        'specs.narLine': 'NAR line',
        'specs.algorithms': 'Algorithms',
        'specs.stock': 'Stock capability',
        'specs.certs2': 'Certifications',
        'specs.training': 'Training',
        'specs.nar.samLine': 'SAM Splint, SAM XT, vacuum splints and modular splinting for immobilisation.',
        'specs.nar.narLine': 'Haemostatic dressings (Combat Gauze, QuikClot), C-A-T tourniquets, C-TECC kits.',
        'specs.nar.algorithms': 'Full compatibility with MARCH (Massive bleeding, Airway, Respiration, Circulation, Hypothermia) and PAWS.',
        'specs.nar.stock': 'Available through direct distribution and custom kits based on institutional protocols.',
        'specs.nar.certs': 'Standard equipment in NATO military operations, FBI-HRT, MARSOC, DEA-SRT.',
        'specs.nar.training': 'Rapid-application courses, compatible with TCCC/TECC, in under 8 hours of training.',

        'fields.eyebrow': '04 — Sectors',
        'fields.title': 'Fields of <span class="text-orange">application</span>',
        'fields.lead': 'The solutions in the Baires TAC portfolio are designed to adapt to a wide range of environments where preparedness, response capability and access to specialised equipment are essential. We support organisations and professionals with technology, training and advisory tailored to the specific needs of each field of application.',
        'fields.f1Title': 'Hospitals and clinics',
        'fields.f1Text': 'Solutions for trauma management, bleeding control and strengthening the response to in-hospital and prehospital emergencies.',
        'fields.f2Title': 'Emergency medical services',
        'fields.f2Text': 'Equipment designed to optimise initial patient care and response in emergency and rescue scenarios.',
        'fields.f3Title': 'Industry',
        'fields.f3Text': 'Technologies for emergency brigades, in-house medical services, health-and-safety departments and incident response in industrial environments.',
        'fields.f4Title': 'Energy and natural resources',
        'fields.f4Text': 'Solutions for operations in highly demanding environments, where preparedness and immediate response are essential.',
        'fields.f5Title': 'Fire services and civil protection',
        'fields.f5Text': 'Specialised equipment for rescue operations, prehospital care and bleeding control during emergency response.',
        'fields.f6Title': 'Security forces',
        'fields.f6Text': 'Technologies for tactical medicine and initial care in operations where rapid intervention can be decisive.',
        'fields.f7Title': 'Armed forces',
        'fields.f7Text': 'Equipment designed to support prehospital care and initial trauma management across different operational scenarios.',
        'fields.f8Title': 'Training and drills',
        'fields.f8Text': 'Resources for institutions and organisations seeking to strengthen their teams’ preparedness through education, simulation and hands-on training programmes.',
        'fields.ctaTitle': 'How can we support your organisation?',
        'fields.ctaP1': 'Every organisation faces different challenges and needs solutions that match its operational reality. At Baires TAC we believe that combining technology, training and technical advisory is the foundation for building a safer, more efficient and better-prepared response to critical situations.',
        'fields.ctaP2': 'Our team is available to provide more information and answer any questions about our solutions and services.',
        'fields.ctaBtn': 'Let’s talk',

        'training.eyebrow': '05 — Training',
        'training.title': 'Professional <span class="text-olive">training and education</span>',
        'training.lead': 'In partnership with the Argentine Society of Tactical Medicine (SAMT) and Australis Group / SETEC, BairesTac delivers elite training to front-line personnel.',
        'training.i1Title': 'Bleeding control:',
        'training.i1Text': 'Basic and advanced, for physical security and civilian settings.',
        'training.i2Title': 'Instructor training:',
        'training.i2Text': 'Official certification programme across the Southern Cone.',
        'training.cta': 'Ask about upcoming courses',

        'stats.title': 'Proven clinical impact',
        'stats.lead': 'Figures that demonstrate the effectiveness of our solutions in real-world settings.',
        'stats.s1Label': 'Surgical procedures',
        'stats.s1Text': 'HemaClear® tourniquets used in surgery worldwide.',
        'stats.s2Label': 'Mortality reduction',
        'stats.s2Text': 'In severe trauma with HemaShock™ versus standard of care.',
        'stats.s3Number': '30 sec',
        'stats.s3Label': 'Time to effect',
        'stats.s3Text': 'HemaShock™ displaces 1,000 cc of blood in under 30 seconds.',
        'stats.s4Label': 'Success rate',
        'stats.s4Text': 'In pre-surgical haemodynamic stabilisation reported in the literature.',

        'stories.title': 'Success stories',
        'stories.lead': 'Real stories of lives saved across the Southern Cone.',
        'stories.ctx': 'Context:',
        'stories.app': 'Application:',
        'stories.res': 'Outcome:',
        'stories.c1Title': 'Central trauma hospital',
        'stories.c1Ctx': 'Penetrating chest trauma with refractory haemorrhagic shock.',
        'stories.c1App': 'HemaShock™ A-TT for 45 minutes pre-surgery.',
        'stories.c1Res': 'Patient stabilised, survived and returned fully to work. Massive transfusion avoided.',
        'stories.c1Loc': 'Argentina — 2024',
        'stories.c2Title': 'Joint tactical operation',
        'stories.c2Ctx': 'Operator wounded with exsanguinating thigh haemorrhage.',
        'stories.c2App': 'NAR C-A-T + haemostatic dressing in theatre (CUF).',
        'stories.c2Res': 'Bleeding controlled in under 3 minutes, safe evacuation, full recovery with no amputation.',
        'stories.c2Loc': 'Southern region — 2024',
        'stories.c3Title': 'Emergency orthopaedic surgery',
        'stories.c3Ctx': 'Open fracture with significant vascular damage.',
        'stories.c3App': 'HemaClear® S-TT for a bloodless field in the operating room.',
        'stories.c3Res': '2.5-hour procedure with no bleeding, full functional preservation of the limb.',
        'stories.c3Loc': 'Chile — 2024',
        'stories.c4Title': 'Mass casualty medical response',
        'stories.c4Ctx': '8 road accident casualties with severe multiple trauma.',
        'stories.c4App': 'NAR kits with haemostatic dressings and the MARCH algorithm.',
        'stories.c4Res': '100% survival on scene and in hospital, 4-point improvement in resilience scores.',
        'stories.c4Loc': 'Uruguay — 2024',

        'certs.title': '<span class="text-orange">International</span> certifications and validations',
        'certs.lead': 'Our products meet the highest global safety and efficacy standards.',
        'certs.c1': 'Medical device clearance from the U.S. Food and Drug Administration. Compliance with premarket safety standards.',
        'certs.c2Title': 'CE Mark (European Union)',
        'certs.c2': 'Compliance with the Medical Device Regulation (MDR 2017/745). Independent audit and full clinical validation.',
        'certs.c3': 'Quality management system for medical devices. Traceability, change control and risk management.',
        'certs.c4Title': 'Clinical publications',
        'certs.c4': 'Scientific backing in the Journal of Trauma, Resuscitation and Prehospital Emergency Care. More than 18 peer-reviewed studies.',

        'faq.title': 'Frequently asked questions',
        'faq.lead': 'Answers to the most common questions about our products and services.',
        'faq.q1': 'What is the difference between HemaShock™ and HemaClear®?',
        'faq.a1': '<strong>HemaShock™ (A-TT)</strong> is an emergency tourniquet that massively displaces autologous blood to restore blood pressure in haemorrhagic shock. <strong>HemaClear® (S-TT)</strong> is a sterile surgical tourniquet used to create a bloodless field during surgery. Completely different uses, both essential.',
        'faq.q2': 'How long can the tourniquet stay applied?',
        'faq.a2': 'HemaShock™: safe for up to 120 minutes with no risk of tissue necrosis. HemaClear®: up to 180 minutes on limbs. Both products include ischaemia monitoring protocols and post-application care.',
        'faq.q3': 'Do I need special training to use these products?',
        'faq.a3': 'Yes. BairesTac offers training in bleeding control, basic and advanced, and an instructor certification programme across the Southern Cone. HemaShock™ requires advanced medical training. We provide on-site instructors and local trainer certification.',
        'faq.q4': 'What are the main contraindications?',
        'faq.a4': 'HemaShock™: do not use in hypovolaemia without active bleeding, severe heart failure, or baseline systolic pressure above 160 mmHg. HemaClear®: do not use with pre-existing ischaemia or severe vascular disorders. Always consult the responsible physician.',
        'faq.q5': 'How does delivery work across the Southern Cone?',
        'faq.a5': 'We work with Australis Group and SETEC. Delivery to Argentina, Chile, Uruguay, Paraguay, Bolivia and Brazil in 5-10 business days. Local warehouses in major cities. Refrigerated transport for products that require it.',
        'faq.q6': 'Do you offer a warranty or after-sales technical service?',
        'faq.a6': 'Yes. A 2-year warranty against manufacturing defects. 24/7 technical support line. Spare parts and maintenance available. Usage audits and efficacy reports for institutions.',

        'contact.eyebrow': '06 — Contact',
        'contact.title': 'Would you like <span class="text-orange">more information</span>?',
        'contact.lead': 'If you would like to know more about our equipment, arrange a training session, make a technical enquiry or evaluate a solution for your organisation, leave us a message through the form or get in touch directly.',
        'contact.emailLabel': 'Email',
        'contact.waLabel': 'WhatsApp',
        'contact.whyTitle': 'Why choose us',
        'contact.why1': 'Official representation of world-leading brands',
        'contact.why2': 'Specialised technical and scientific backing',
        'contact.why3': 'International certifications (FDA / CE)',
        'contact.why4': 'Globally published clinical evidence',
        'contact.why5': 'Robust logistics network across the Southern Cone',
        'contact.alliesTitle': 'Our partners',

        'form.name': 'Full name',
        'form.namePh': 'e.g. Jane Smith',
        'form.company': 'Company / Institution',
        'form.companyPh': 'e.g. Municipal Hospital',
        'form.email': 'Email',
        'form.emailPh': 'name@company.com',
        'form.phone': 'Phone',
        'form.country': 'Country',
        'form.countryBrazil': 'Brazil',
        'form.countryOther': 'Other',
        'form.interest': 'Main interest',
        'form.int1': 'Medical equipment',
        'form.int2': 'Training and education',
        'form.int3': 'Technical advisory',
        'form.int4': 'Distribution opportunity',
        'form.int5': 'Other enquiry',
        'form.message': 'Message or enquiry',
        'form.messagePh': 'Write your enquiry...',
        'form.submit': 'Send via WhatsApp',
        'form.waIntro': 'Hello BairesTac, I am writing from your website.',
        'form.waOpened': 'We opened WhatsApp with your enquiry ready. Just hit send.',
        'form.waBlocked': 'Your browser blocked the WhatsApp window.',
        'form.waOpenHere': 'Open WhatsApp',
        'form.errRequired': 'Please fill in at least your name and your enquiry.',
        'form.errEmail': 'Please check the email address: the format does not look valid.',

        'footer.tagline': 'Integrated solutions for emergency care, tactical medicine and bleeding control across the Southern Cone.',
        'footer.rights': '© 2026 BairesTac. All rights reserved.'
    }
};

const STORAGE_KEY = 'bairestac-lang';
let currentLang = 'es';

/** Devuelve la traducción de una clave en el idioma activo. */
function t(key) {
    const dict = I18N[currentLang] || I18N.es;
    return dict[key] !== undefined ? dict[key] : (I18N.es[key] !== undefined ? I18N.es[key] : key);
}

/**
 * Escribe el texto en el elemento. Usamos innerHTML solo porque el diccionario
 * es contenido propio y estático (incluye <span> y <strong> de énfasis).
 */
function setText(el, value) {
    if (value.indexOf('<') === -1) {
        el.textContent = value;
    } else {
        el.innerHTML = value;
    }
}

function applyLanguage(lang) {
    currentLang = I18N[lang] ? lang : 'es';
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        setText(el, t(el.dataset.i18n));
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    document.querySelectorAll('[data-i18n-content]').forEach(el => {
        el.setAttribute('content', t(el.dataset.i18nContent));
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
        el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel));
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.dataset.lang === currentLang;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });

    try {
        localStorage.setItem(STORAGE_KEY, currentLang);
    } catch (e) {
        /* localStorage bloqueado (modo privado): el idioma no persiste, nada más */
    }

    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: currentLang } }));
}

function detectInitialLanguage() {
    let stored = null;
    try {
        stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
        /* sin acceso a localStorage */
    }
    if (stored && I18N[stored]) return stored;

    const browser = (navigator.language || 'es').toLowerCase();
    return browser.startsWith('en') ? 'en' : 'es';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });

    applyLanguage(detectInitialLanguage());
});
