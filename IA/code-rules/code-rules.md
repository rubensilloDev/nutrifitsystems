# Normas de Código

Para mantener el proyecto escalable y profesional, todo el código debe seguir estas directrices:

## 1. HTML: Semántica y Nomenclatura
* **HTML Semántico:** Uso obligatorio de etiquetas según su propósito (`<header>`, `<main>`, `<section>`, `<footer>`).
* **Clases en Inglés:** Deben ser descriptivas y jerárquicas: `nombreseccion-elemento`.
    * *Ejemplo:* `hero-title`, `hero-button`, `pricing-container`.
* **IDs:** Solo para elementos estructurales únicos o anclas (ej: `id="pricing"`).

## 2. CSS: Orden Descendente y Estructura
* **Orden hacia abajo:** El CSS debe seguir exactamente el mismo orden que el HTML. Si la sección "Problema" va después de "Hero", sus estilos también irán después en el archivo CSS.
* **Comentarios Visuales:** Los encabezados de sección deben ser muy destacados.

## 3. JavaScript: Legibilidad y Simplicidad
* **Lógica simple:** Código fácil de leer para principiantes.
* **Comentado:** Explicar el "por qué" de cada bloque de acción.

---

## Ejemplo de Respaldo

### HTML (Estructura Semántica)
```html
<section class="hero-container" id="hero">
    <div class="hero-content">
        <h1 class="hero-title">El control total de la nutrición</h1>
        <p class="hero-text">Gestiona tu consulta o tu progreso personal.</p>
        <button class="btn-primary" id="main-cta">Empezar gratis</button>
    </div>
</section>

<section class="problem-container" id="problem">
    <h2 class="problem-title">¿Cansado del caos?</h2>
    </section>
```

### CSS (Ordenado y Visual)
```css
/* =========================================
   ESTILOS GLOBALES
   ========================================= */
:root {
    --primary-color: #2E7D32;
    --bg-main: #FAFAFA;
}

/* =========================================
   SECCIÓN: HERO (Sigue el orden del HTML)
   ========================================= */
.hero-container {
    background-color: var(--bg-main);
    padding: 60px 20px;
}

.hero-title {
    font-family: 'Lexend', sans-serif;
    font-size: 3rem;
}

/* =========================================
   SECCIÓN: PROBLEMA (Sigue el orden del HTML)
   ========================================= */
.problem-container {
    background-color: #E8F5E9;
    padding: 80px 0;
}
```

### JavaScript (Sencillo y Limpio)
```javascript
// Seleccionamos el botón de la sección Hero
const ctaButton = document.querySelector('#main-cta');

// Función que muestra un mensaje de bienvenida al hacer clic
function handleWelcomeClick() {
    console.log("El usuario ha hecho clic en el botón principal");
    alert("¡Bienvenido a NutriFit Systems!");
}

// Escuchamos el evento de clic en el botón
ctaButton.addEventListener('click', handleWelcomeClick);
```