/**
 *  Pages Authentication
 */
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  (() => {
    const formAuthentication = document.querySelector('#formAuthentication');

    // Form validation for Add new record
    if (formAuthentication && typeof FormValidation !== 'undefined') {

   FormValidation.formValidation(formAuthentication, {
        fields: {
          username: {
            validators: {
              notEmpty: {
                message: 'Por favor ingrese el usuario'
              },
              stringLength: {
                max: 6,
                message: 'El usuario debe tener máximo 6 caracteres'
              },
              regexp: {
                regexp: /^[a-zA-Z0-9]+$/,
                message: 'El usuario no puede contener arrobas ni caracteres especiales'
              }
            }
          },

          email: {
            validators: {
              notEmpty: {
                 message: 'Por favor ingrese su correo electrónico'
              },
              emailAddress: {
                message: 'Por favor ingrese un correo electrónico válido'
              }
            }
          },
          'email-username': {
            validators: {
              notEmpty: {
                message: 'Por favor ingrese correo electrónico o nombre de usuario'
              },
              stringLength: {
                min: 6,
                message: 'El nombre de usuario debe tener más de 6 caracteres'
              }
            }
          },
          password: {
            validators: {
              notEmpty: {
               message: 'Por favor ingrese su contraseña'
              },
              stringLength: {
                min: 6,
                message: 'La contraseña debe tener más de 6 caracteres'
              }
            }
          },
          'confirm-password': {
            validators: {
              notEmpty: {
                message: 'Por favor confirma la contraseña'
              },
              identical: {
                compare: () => formAuthentication.querySelector('[name="password"]').value,
                message: 'La contraseña y su confirmación no coinciden'
              },
              stringLength: {
                min: 6,
                message: 'La contraseña debe tener más de 6 caracteres'
              }
            }
          },
          terms: {
            validators: {
              notEmpty: {
                message: 'Por favor acepte los términos y condiciones'
              }
            }
          }
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            rowSelector: '.form-control-validation'
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),
          defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
          autoFocus: new FormValidation.plugins.AutoFocus()
        },
        init: instance => {
          instance.on('plugins.message.placed', e => {
            if (e.element.parentElement.classList.contains('input-group')) {
              e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
            }
          });
        }
      }); 
    }

    // Two Steps Verification for numeral input mask
    const numeralMaskElements = document.querySelectorAll('.numeral-mask');

    // Format function for numeral mask
    const formatNumeral = value => value.replace(/\D/g, ''); // Only keep digits

    if (numeralMaskElements.length > 0) {
      numeralMaskElements.forEach(numeralMaskEl => {
        numeralMaskEl.addEventListener('input', event => {
          numeralMaskEl.value = formatNumeral(event.target.value);
        });
      });
    }
  })();
});
