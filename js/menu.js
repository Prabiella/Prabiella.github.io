
  // Cambiar iconos en hover usando data attributes
  document.querySelectorAll(".sidebar-menu a").forEach(item => {
  
    const img = item.querySelector("img");
    const normal = item.dataset.icon;
    const hover = item.dataset.iconHover;
  
    // Hover
    item.addEventListener("mouseenter", () => {
      img.src = hover;
    });
  
    item.addEventListener("mouseleave", () => {
      if (!item.classList.contains("active")) {
        img.src = normal;
      }
    });
  
    // Si está activo, asignar icono hover
    if (item.classList.contains("active")) {
      img.src = hover;
    }
  });