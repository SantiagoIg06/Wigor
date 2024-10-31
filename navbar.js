document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop(); // Obtiene el nombre de la página actual
    const navbarHTML = `
        <nav class="navbar navbar-expand-lg" style="background-color: #DDB584;">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img src="imgs/wigorLogo.jpeg" alt="Logo de Mi Empresa"> <!-- Logo en lugar de texto -->
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'index.html' ? 'active' : ''}" href="index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'quienes-somos.html' ? 'active' : ''}" href="quienes-somos.html">Quienes Somos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'productos.html' ? 'active' : ''}" href="productos.html">Nuestros Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'contacto.html' ? 'active' : ''}" href="contacto.html">Contáctenos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});
