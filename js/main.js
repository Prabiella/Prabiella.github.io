

    // ------------------------
    // Sidebar responsive logic
    // ------------------------
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const toggleBtn = document.getElementById('toggleSidebar');

    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('show');
      overlay.classList.toggle('show');
      // focus first nav link for accessibility when opening
      if (sidebar.classList.contains('show')) {
        const firstLink = sidebar.querySelector('nav a');
        if (firstLink) firstLink.focus();
      }
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('show');
      overlay.classList.remove('show');
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 992) {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
      }
    });

    // ------------------------------------------
    // Litepicker - date range (robust integration)
    // ------------------------------------------
    // Element references
    const dateInput = document.getElementById('daterange');
    const preview = document.getElementById('selectedRangePreview');

    // Create picker
    const picker = new Litepicker({
      element: dateInput,
      singleMode: false,
      numberOfMonths: 2,
      numberOfColumns: 2,
      format: 'DD/MM/YYYY',
      autoApply: true,
      showWeekNumbers: true,
      // closeOnSelect: true, // default behaviour
    });

    // Update input text & preview when user selects
    picker.on('selected', (start, end) => {
      if (start && end) {
        // start and end are Date objects in many versions; convert safely
        const fmt = d => {
          if (!d) return '';
          const dd = String(d.getDate()).padStart(2,'0');
          const mm = String(d.getMonth()+1).padStart(2,'0');
          const yy = String(d.getFullYear());
          return `${dd}/${mm}/${yy}`;
        };
        dateInput.value = `${fmt(start)} - ${fmt(end)}`;
        preview.textContent = `📅 Del ${fmt(start)} al ${fmt(end)}`;
      } else {
        dateInput.value = '';
        preview.textContent = '';
      }
    });

    // Initialize to "últimos 7 días" by default
    (function setDefaultLast7(){
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 6);
      picker.setDateRange(start, end);
      // ensure preview/input updated (setDateRange triggers selected event in many versions; if not, set manually)
      // fallback: manually set input if empty after small delay
      setTimeout(() => {
        if (!dateInput.value) {
          const dd = d => `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
          dateInput.value = `${dd(start)} - ${dd(end)}`;
          preview.textContent = `📅 Del ${dd(start)} al ${dd(end)}`;
        }
      }, 50);
    })();

    // Quick ranges: bind dropdown items
    document.querySelectorAll('[data-range]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const days = parseInt(e.currentTarget.dataset.range, 10);
        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - days + 1);
        picker.setDateRange(start, end);
        // Close dropdown (Bootstrap handles toggling automatically on click)
      });
    });

    // Clear range
    document.getElementById('clearRange').addEventListener('click', () => {
      // many versions expose setDateRange(null,null) or setStartDate / setEndDate,
      // but safest is to clear the input and reset internal state by hiding and re-creating.
      dateInput.value = '';
      preview.textContent = '';
      picker.setDateRange(null, null); // if not supported, it may silently fail; input cleared still useful
    });

    // Accessibility: open picker when clicking input or pressing Enter
    dateInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        picker.show();
      }
    });

    // If Litepicker fails to create events in your version, you can fallback to 'change' on the input:
    dateInput.addEventListener('change', () => {
      // try to parse the text (DD/MM/YYYY - DD/MM/YYYY)
      const v = dateInput.value || '';
      const parts = v.split(' - ');
      if (parts.length === 2) {
        preview.textContent = `📅 Del ${parts[0]} al ${parts[1]}`;
      } else {
        preview.textContent = '';
      }
    });



// Oculta el indicador rojo al abrir el panel de notificaciones
const notifButton = document.getElementById('notifButton');
const notifIndicator = document.getElementById('notifIndicator');

notifButton.addEventListener('click', () => {
  notifIndicator.style.display = 'none';
});





