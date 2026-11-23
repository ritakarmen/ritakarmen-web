# ritakarmen — sitio inicial

Primera versión de un sitio profesional para captar clientes de desarrollo web en Perú.

**Nombre comercial provisional:** ritakarmen (no se ha verificado ni registrado marca o dominio).

## ¿Qué incluye?

- Landing page responsiva, diseñada desde cero para desktop y móvil.
- Servicios, dos diseños conceptuales de demostración, paquetes y precios, proceso de trabajo, presentación profesional, preguntas frecuentes y formulario de cotización.
- SEO inicial: título, meta descripción, Open Graph, HTML semántico y `robots.txt`.
- Menú móvil accesible, enlaces internos y compatibilidad con navegadores modernos.
- Solicitudes preparadas exclusivamente para correo electrónico, con opción de copia.
- No usa bases de datos, suscripciones ni herramientas de pago.

## Contacto por correo electrónico (ya configurado)

El correo público para recibir solicitudes de presupuesto es **ritakarmen@gmail.com**. Está configurado en `config.js`:

```js
window.RITAKARMEN_CONFIG = {
  contactEmail: 'ritakarmen@gmail.com',
};
```

- La sección de contacto también muestra un enlace directo a ese correo.
- Cuando el visitante completa el formulario, aparece **«Enviar por correo»**, que abre su programa de correo con el destinatario, asunto y datos del presupuesto preparados. **El visitante todavía debe pulsar Enviar en su aplicación de correo**; no hay envío automático ni almacenamiento en el sitio.
- Si el visitante no tiene una aplicación de correo configurada, puede usar «Copiar solicitud» y pegar el texto manualmente en Gmail u otro servicio.
- No necesitas compartir tu contraseña de Gmail ni configurar claves en el proyecto.
- Si más adelante deseas recibir formularios automáticamente (sin que se abra el correo del visitante), hará falta integrar un proveedor de formularios o un backend.

## Abrir y probar localmente

Con VS Code, abre la carpeta `ritakarmen-web` y en una terminal ejecuta:

```bash
python -m http.server 5500
```

Abre http://localhost:5500 en tu navegador. En Windows, `py -m http.server 5500` también suele funcionar. Puedes usar la extensión Live Server si la prefieres.

No necesitas `npm install`, `node_modules` ni compilar. Esta fase usa HTML, CSS y JavaScript para reducir costo y facilitar la publicación. Puedes migrar a Astro/Vue cuando necesites nuevos módulos.

## Publicar GRATIS con Cloudflare Pages + GitHub

1. Entra a **https://github.com/new** con tu cuenta `ritakarmen`.
2. Crea un repositorio público nuevo llamado `ritakarmen-web` (si el nombre está libre). No añadas README desde GitHub, porque ya lo tienes aquí.
3. Desde tu terminal, situada dentro de esta carpeta, ejecuta:

```bash
git init
git add .
git commit -m "Primera versión de ritakarmen"
git branch -M main
git remote add origin https://github.com/ritakarmen/ritakarmen-web.git
git push -u origin main
```

4. Abre https://dash.cloudflare.com/ → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git** (los nombres pueden cambiar ligeramente).
5. Conecta tu cuenta de GitHub, selecciona `ritakarmen-web` y el branch `main`.
6. Elige el preset **None** o equivalente para HTML estático; deja vacío el comando de compilación y usa `.` (punto, la carpeta raíz) como directorio de salida.
7. Inicia el despliegue. Cloudflare te asignará un subdominio gratuito `*.pages.dev`. **El nombre exacto lo conocerás recién al publicarlo.**
8. Comprueba el formulario de contacto, las secciones, la versión móvil y los enlaces antes de difundirlo.

Después de publicar, reemplaza la ruta relativa `og:image` en `index.html` por la URL absoluta de tu portada (ejemplo: `https://tu-dominio/assets/og-cover.svg`; algunos servicios de redes prefieren PNG/JPG). Si aún no tienes dominio, usa la URL real de `pages.dev` que Cloudflare te asigne. También puedes agregar una URL canónica cuando sea definitiva.

**Alternativa:** puedes desplegar esta carpeta por carga directa a Cloudflare Pages, pero si escoges carga directa no podrás convertir ese mismo proyecto a integración Git después. Para conservar actualizaciones automáticas, recomendamos crear el proyecto con Git desde el principio.

## Dominio propio (no comprar todavía)

Cuando tengas la web lista y el contacto configurado, revisa la disponibilidad de dominio en https://punto.pe. Los dominios `.pe` y `.com.pe` suelen figurar en S/ 110/año (verifica la tarifa vigente). La compra no está incluida ni se ha realizado.

## Antes de conseguir el primer cliente

- [ ] Confirmar que `ritakarmen` no colisiona con marcas existentes. Considera búsqueda de antecedentes en INDECOPI.
- [x] Correo de contacto configurado en `config.js`: `ritakarmen@gmail.com`.
- [ ] Revisar los paquetes, límites, precios e impuestos aplicables; editar los textos según tu forma de trabajar.
- [ ] Abrir y probar la web en celular y escritorio.
- [ ] Preparar un contrato/presupuesto por proyecto (alcance, pagos, cambios, propiedad intelectual, mantenimiento).
- [ ] Verificar tus obligaciones de RUC y comprobantes ante SUNAT antes de realizar actividades comerciales.
- [ ] Agregar una política de privacidad adaptada a los datos que finalmente recojas, si implementas recogida o seguimiento.
- [ ] Registrar el sitio en Search Console después de publicar y conectar el dominio.

## Archivos

```
index.html             Página principal completa
styles.css             Diseño responsive
script.js              Menú móvil, selección de plan y solicitud de presupuesto
config.js              Correo de contacto (ritakarmen@gmail.com)
assets/favicon.svg     Icono de marca
assets/og-cover.svg    Imagen social inicial
robots.txt             Acceso a buscadores
PLAN-DE-NEGOCIO.md     Plan de validación y presupuesto
```

## Créditos y contenido

Los proyectos `Aprender+` y `Vitalia` son **propuestas visuales ficticias** para ilustrar servicios, no clientes, testimonios ni proyectos contratados. Las capturas se han construido con CSS y HTML propios. Los precios son una propuesta comercial revisable, no una referencia oficial.