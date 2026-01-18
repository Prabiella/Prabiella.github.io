/* Script de dataTable */

$(document).ready(function () {
    if ($.fn.DataTable.isDataTable('#empresasTable')) return;
  
    const table = $('#empresasTable').DataTable({
      responsive: true,
      autoWidth: false,
      paging: true,
      searching: true,
      info: true,
      ordering: true,
      language: {
        search: '',
        searchPlaceholder: 'Buscar...'
      },
      columnDefs: [
        {
          targets: 6,
          orderable: false,
          searchable: false
        }
      ],
      order: [[0, 'asc']],
      dom: 'Bfrtip',
      buttons: [
        { extend: 'csv', className: 'd-none', title: 'Empresas' },
        { extend: 'excel', className: 'd-none', title: 'Empresas' },
        { extend: 'print', className: 'd-none', title: 'Empresas' }
      ]
    });
  
    // 🔍 Search externo
    $('#tableSearch').on('keyup', function () {
      table.search(this.value).draw();
    });
  
    // 📤 Export
    $('.export-csv').on('click', e => { e.preventDefault(); table.button(0).trigger(); });
    $('.export-excel').on('click', e => { e.preventDefault(); table.button(1).trigger(); });
    $('.export-print').on('click', e => { e.preventDefault(); table.button(2).trigger(); });
  });

