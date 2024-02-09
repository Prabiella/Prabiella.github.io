//-----------------------------------------
//          FORMAT LIVE VIEW
//-----------------------------------------
$("#getHTML").on("click", function () {
    //Removes all delete buttons and contenteditable functionality
        $("#hiddenDiv").append($("#yourForm").html())
        $("#hiddenDiv button").remove()
        $("#hiddenDiv label").removeAttr("contenteditable")
        $("#hiddenDiv h3").removeAttr("contenteditable")
    //Adds a submit button to the end of the form.
    //Button color depends on color selected for form.
        if ($("#buttonPrimary").hasClass("active") || $("#buttonSecondary").hasClass("active") || $("#buttonSuccess").hasClass("active") || $("#buttonDanger").hasClass("active") || $("#buttonWarning").hasClass("active") || $("#buttonInfo").hasClass("active") || $("#buttonDark").hasClass("active")) {
            $("#hiddenDiv #thisForm").append('<button type="button" class="btn btn-outline-light float-right">Submit</button>')
        } else {
            $("#hiddenDiv #thisForm").append('<button type="button" class="btn btn-outline-dark float-right">Submit</button>')
        }
        $("#liveCode").val($("#hiddenDiv").html())
    //Regex to delete all blank lines
        let liveCodeValue = $('#liveCode').val();
        let newVal = liveCodeValue.replace(/^\s*[\r\n]/gm, '');
        $('#liveCode').val(newVal);
        //Clears the hidden div
        $("#hiddenDiv").empty()
    })
    
    //-----------------------------------------
    //            CHANGE FORM COLOR
    //-----------------------------------------
    $("#buttonPrimary").click(function(event){
        //Make any other selected color classes inactive
        $(".color-button").removeClass("active")
        $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")
    
        $("#cardBody").toggleClass("bg-primary")
        $("#cardBody").toggleClass("text-white")
        $("#buttonPrimary").toggleClass("active")
    })
    
    $("#buttonSecondary").click(function(event){
        $(".color-button").removeClass("active")
        $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")
    
        $("#cardBody").toggleClass("bg-secondary")
        $("#cardBody").toggleClass("text-white")
        $("#buttonSecondary").toggleClass("active")
    })
    
    $("#buttonSuccess").click(function(event){
        $(".color-button").removeClass("active")
        $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")
    
        $("#cardBody").toggleClass("bg-success")
        $("#cardBody").toggleClass("text-white")
        $("#buttonSuccess").toggleClass("active")
    })
    
    $("#buttonDanger").click(function(event){
        $(".color-button").removeClass("active")
        $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")
    
        $("#cardBody").toggleClass("bg-danger")
        $("#cardBody").toggleClass("text-white")
        $("#buttonDanger").toggleClass("active")
    })
    
    $("#buttonWarning").click(function(event){
        $(".color-button").removeClass("active")
        $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")
    
        $("#cardBody").toggleClass("bg-warning")
        $("#cardBody").toggleClass("text-white")
        $("#buttonWarning").toggleClass("active")
    })
    
    $("#buttonInfo").click(function(event){
        $(".color-button").removeClass("active")
        $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")
    
        $("#cardBody").toggleClass("bg-info")
        $("#cardBody").toggleClass("text-white")
        $("#buttonInfo").toggleClass("active")
    })
    $("#buttonLight").click(function(event){
        $(".color-button").removeClass("active")
        $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")
    
        $("#cardBody").toggleClass("bg-light")
        $("#buttonLight").toggleClass("active")
    })
    
    $("#buttonDark").click(function(event){
        $(".color-button").removeClass("active")
        $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")
        
        $("#cardBody").toggleClass("bg-dark")
        $("#cardBody").toggleClass("text-white")
        $("#buttonDark").toggleClass("active")
    })
    
    let formCount = 4
    
    
    //-----------------------------------------
    //          ADD A FORM FIELD
    //-----------------------------------------
        $("#addField").on("click", function(){
            formCount++
            $("#thisForm").append(`
                <div class="formInput col-md-6">
                    <span>
                        <label for="emptyFormInput${formCount}" contenteditable="true" class="font-weight-bold">Form Label ${formCount}</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="emptyFormInput${formCount}">
                            <button type="button" class="input-group-append btn delete-button">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </span>
                 </div>
            `)
        })
    

  


    //-----------------------------------------
    //          ADD A FORM NSS
    //-----------------------------------------
    $("#addFieldNss").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput col-md-6">
                <span>
                    <label for="emptyFormInput${formCount}" contenteditable="true" class="font-weight-bold">Form Label ${formCount}</label>
                    <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroupPrepend3"><img src="img/nssicon.svg" alt="Número de Seguro Social"></span>
                        <input type="number" class="form-control" placeholder="ingresa tu número a 11 dígitos" id="emptyFormInput${formCount}">
                        <button type="button" class="input-group-append btn delete-button">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </span>
             </div>
        `)
    })





        //-----------------------------------------
    //          ADD A FORM EMAIL
    //-----------------------------------------
    $("#addFieldMail").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput col-md-6">
                <span>
                    <label for="emptyFormInput${formCount}" contenteditable="true" class="font-weight-bold">Form Label ${formCount}</label>
                    <div class="input-group mb-3">

                    <span class="input-group-text" id="inputGroupPrepend3"><img src="img/mail.svg" alt="Correo electrónico"></span>
                   


                        <input type="text" class="form-control" id="emptyFormInput${formCount}">
                        <button type="button" class="input-group-append btn delete-button">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </span>
             </div>
        `)
    })



        //-----------------------------------------
    //          ADD A FORM CELLPHONE
    //-----------------------------------------
    $("#addFieldCellPhone").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput col-md-6">
                <span>
                    <label for="emptyFormInput${formCount}" contenteditable="true" class="font-weight-bold">Form Label ${formCount}</label>
                    <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroupPrepend3"><img src="img/celphone_icon.svg" alt="Teléfono celular"></span>
                        <input type="number" class="form-control"  placeholder="ingresa tu número a 10 dígitos"  id="emptyFormInput${formCount}">
                        <button type="button" class="input-group-append btn delete-button">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </span>
             </div>
        `)
    })



        //-----------------------------------------
    //          ADD A FORM TELEPHONE
    //-----------------------------------------
    $("#addFieldTelephone").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput col-md-6">
                <span>
                    <label for="emptyFormInput${formCount}" contenteditable="true" class="font-weight-bold">Form Label ${formCount}</label>
                    <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroupPrepend3"><img src="img/phone_icon.svg" alt="Número telefónico"></span>
                        <input type="number" class="form-control"  placeholder="ingresa tu número a 10 dígitos"  id="emptyFormInput${formCount}">
                        <button type="button" class="input-group-append btn delete-button">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </span>
             </div>
        `)
    })



        //-----------------------------------------
    //          ADD A FORM DATEPICKER
    //-----------------------------------------
    $("#addDatePicker").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput col-md-6">
                <span>
                    <label for="emptyFormInput${formCount}" contenteditable="true" class="font-weight-bold">Form Label ${formCount}</label>
                    <div class="input-group mb-3 date">
                   
                        <input type="date" class="form-control"  id="emptyFormInput${formCount}">
                        <button type="button" class="input-group-append btn delete-button">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </span>
             </div>
        `)
    })





        //-----------------------------------------
    //          ADD A ONE OPTION
    //-----------------------------------------

    $("#addOneOption").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput col-md-6">
                <span>
                    <div class="form-row">
                        <div class="col">
                        <h5 class="titleg mt-3">Aviso legal y termino y condiciones</h5>
                        <div class="scrolling-text mb-3">
                      
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                        </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}">
                                <label class="form-check-label" for="defaultCheck${formCount}" contenteditable="true">
                                    Default checkbox ${formCount}
                                </label> <button type="button" class="btn delete-button"><i class="fas fa-times"></i></button>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        `)
    })




        //-----------------------------------------
    //          ADD A SWITCH
    //-----------------------------------------

    $("#addSwitch").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput col-md-6">
                <span>
                <div class=" mb-4">
                <p class="text-black" contenteditable="true">Ingresa el título de la selección</p>

                    <div class="switch-container">
                        <label class="switch">
                          <input type="checkbox" id="okSwitch" onchange="cambiarTexto()" >
                          <span class="slider round"></span>
                        </label>
                        <span class="label-yes" for="okSwitch">No</span>
                        </label> <button type="button" class="btn delete-button"><i class="fas fa-times"></i></button>
                      </div>
                    </div>
                </span>
            </div>
        `)
    })





        //-----------------------------------------
    //          ADD A GENERO
    //-----------------------------------------

    $("#addGenero").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput col-md-6">
                <span>
                <div class="mb-4">
                <p class="text-black">Género</p>
                <input type="radio" name="gender" class="input-hidden" id="masculino" />
                <label for="masculino">
                    <div class="SelecGen" onclick="seleccionarGenero(this)">
                        <img src="img/genero/masc_act.svg" alt="Masculino">
                        <p>Masculino</p>
                    </div>
                </label>
            
                <input type="radio" name="gender" class="input-hidden" id="femenino" />
                <label for="femenino">
                    <div class="SelecGen" onclick="seleccionarGenero(this)">
                        <img src="img/genero/fem_act.svg" alt="Femenino">
                        <p>Femenino</p>
                    </div>
                </label>
                <button type="button" class="btn delete-button"><i class="fas fa-times"></i></button>
                </span>
            </div>
        `)
    })



        //-----------------------------------------
    //          ADD A HEALTHCARE
    //-----------------------------------------

$("#addHealthCare").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput">
                <span>
               
                <select class="form-select" id="lista" required onchange="mostrarImagen()">
                <option selected disabled value="">Selecciona parte del cuerpo</option>
                <option value="Cabeza_cuello">Cabeza/cuello</option>
                <option value="Tronco">Tronco</option>
                <option value="Rodillas">Rodillas</option>
                <option value="Miembros_superiores">Miembros Superiores</option>
                <option value="Miembros_inferiores">Miembros Inferiores</option>
            </select>
    
            <!-- Aquí el canvas -->
            <div id="canvasContainer">
                <p class="text-black">Encierra en un círculo la parte donde tienes dolor</p>
                <canvas id="canvas"></canvas>

                <div class="row">
                    <div class="col-md-6">
                        <button id="limpiarBtn" class="btn btn-primary add-option-btn" onclick="limpiarCanvas()">Limpiar</button>
                    </div>
                </div>

                <button type="button" class="btn delete-button"><i class="fas fa-times"></i></button>
                </span>
            </div>
        `)
    }) 

  
								

        //-----------------------------------------
    //          ADD SIGNIN
    //-----------------------------------------

/* 
$("#addFirma").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput col-md-6">
            <div class="row">
			<div class="col-md-12">
            <div id="signature-pad" class="signature-pad"></div>
                 <button type="button" class="btn delete-button"><i class="fas fa-times"></i></button>
		 	</div>
           
		</div>
        `)
    })
		 */
	


    $("#addFirma").on("click", function() {
        formCount++;
        $("#thisForm").append(`
            <div class="formInput col-md-6">
                <div class="row mt-3">
                    <div class="col-md-12">
                        <h5>Soy responsable de los datos y autorizo</h5>
                        <p class="subSig">Firma lo más parecido a tu INE en el recuadro inferior</p>
                        <div id="signature-pad-${formCount}" class="signature-pad">
                            <canvas></canvas>
                            <div class="text-right d-flex justify-content-end">
                                <button id="clear" class="btn btn-primary add-option-btn">Limpiar</button>
                            </div>
                        </div>
                        <button type="button" class="btn delete-button"><i class="fas fa-times"></i></button>
                    </div>
                </div>
            </div>
        `);
    
        // Agregar eventos para dibujar en la firma
        var signaturePadId = `signature-pad-${formCount}`;
        setupDrawingEvents(signaturePadId);
    });
    
    function setupDrawingEvents(signaturePadId) {
        var signaturePad = new SignaturePad(document.querySelector(`#${signaturePadId} canvas`));
    
        document.getElementById("clear").addEventListener("click", function() {
            signaturePad.clear();
        });
    }
    




    //-----------------------------------------
    //          ADD A FILE
    //-----------------------------------------

    $("#addFile").on("click", function(){
        formCount++
        $("#thisForm").append(`
        <div class="formInput col-md-6 my-2">
        <div class="col-sm-12 d-flex align-items-center">
            <input class="form-control" type="file" id="formFileMultiple" multiple>
            <img src="../img/upload.svg" alt="Imagen" class="file-icon" />
        </div>
        <button type="button" class="btn delete-button"><i class="fas fa-times"></i></button>
       
    </div>
        `)
    })





    //-----------------------------------------
    //          ADD A PHOTO
    //-----------------------------------------

  /*   $("#addPhoto").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput col-md-6 my-2">
         

        <button id="tomarFoto">Tomar Foto</button>
        <div id="videoContainer"></div>



            </div>
        `)
    })

 */


    $("#addPhoto").on("click", function() {
        formCount++;
        $("#thisForm").append(`
            <video id="video-${formCount}" autoplay></video>
            <button id="take-photo-button-${formCount}" class="btn btn-primary add-option-btn">Tomar Foto</button>
            <canvas id="canvas-${formCount}" style="display: none;"></canvas>
        `);
    
        // Esperar a que se cargue el contenido antes de activar la funcionalidad de tomar una foto
        // Para ello, llamamos a setupPhotoTaking dentro de un setTimeout
        setTimeout(function() {
            setupPhotoTaking(`video-${formCount}`, `take-photo-button-${formCount}`, `canvas-${formCount}`);
        }, 0);
    });












    //-----------------------------------------
    //          ADD A DUAL FORM FIELD
    //-----------------------------------------
    $("#addDual").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput">
                <span>
                    <div class="form-row">
                        <div class="col">
                            <label for="emptyFormInput${formCount}" contenteditable="true" class="font-weight-bold">Form Label ${formCount}</label>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" id="emptyFormInput${formCount}">
                            </div>
                        </div>
                        <div class="col">
                            <label for="emptyFormInput${formCount}" contenteditable="true" class="font-weight-bold">Form Label ${formCount}</label>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" id="emptyFormInput${formCount}">
                                <button type="button" class="input-group-append btn delete-button">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        `)
    })
    
    //-----------------------------------------
    //              ADD A CHECKBOX
    //-----------------------------------------
    $("#addCheckbox").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput">
                <span>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}">
                                <label class="form-check-label" for="defaultCheck${formCount}" contenteditable="true">
                                    Default checkbox ${formCount}
                                </label> <button type="button" class="btn delete-button"><i class="fas fa-times"></i></button>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        `)
    })
    
    //-----------------------------------------
    //          ADD A DUAL CHECKBOX
    //-----------------------------------------
    $("#dualCheckboxes").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput">
                <span>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}">
                                <label class="form-check-label" for="defaultCheck${formCount}" contenteditable="true">
                                    Default checkbox ${formCount}
                                </label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}">
                                <label class="form-check-label" for="defaultCheck${formCount}" contenteditable="true">
                                    Default checkbox ${formCount}
                                </label><button type="button" class="btn delete-button float-right"><i class="fas fa-times"></i></button>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        `)
    })
    
    //-----------------------------------------
    //          ADD A TRIPLE CHECKBOX
    //-----------------------------------------
    $("#tripleCheckboxes").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput col-md-6">
                <span>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}">
                                <label class="form-check-label" for="defaultCheck${formCount}" contenteditable="true">
                                    Default checkbox ${formCount}
                                </label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}">
                                <label class="form-check-label" for="defaultCheck${formCount}" contenteditable="true">
                                    Default checkbox ${formCount}
                                </label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}">
                                <label class="form-check-label" for="defaultCheck${formCount}" contenteditable="true">
                                    Default checkbox ${formCount}
                                </label><button type="button" class="btn delete-button float-right"><i class="fas fa-times"></i></button>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        `)
    })
    
    //-----------------------------------------------
    //              ADD A RADIO BUTTON
    //-----------------------------------------------
    $("#addRadio").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput">
                <span>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${formCount}" value="option2">
                                <label class="form-check-label" for="exampleRadios${formCount}">
                                    Default Radio ${formCount}
                                </label> <button type="button" class="btn delete-button"><i class="fas fa-times"></i></button>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        `)
    })
    
    //-------------------------------------------------
    //              ADD DUAL RADIO BUTTONS
    //-------------------------------------------------
    $("#dualRadio").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput">
                <span>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${formCount}" value="option2">
                                <label class="form-check-label" for="exampleRadios${formCount}">
                                    Default Radio ${formCount}
                                </label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${formCount}" value="option2">
                                <label class="form-check-label" for="exampleRadios${formCount}">
                                    Default Radio ${formCount}
                                </label><button type="button" class="btn delete-button float-right"><i class="fas fa-times"></i></button>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        `)
    })
    
    //---------------------------------------------
    //          ADD TRIPLE RADIO BUTTONS
    //---------------------------------------------
    $("#tripleRadio").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput col-md-6">
                <span>
                    <div class="form-row" style="display:flex;">
                        <div class="col" style="flex: 1;">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${formCount}" value="option2">
                                <label  class="form-check-label" contenteditable="true" for="exampleRadios${formCount}" >
                                    Default Radio ${formCount}
                                </label>
                            </div>
                        </div>
                        <div class="col" style="flex: 1;">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${formCount}" value="option2">
                                <label class="form-check-label" contenteditable="true" for="exampleRadios${formCount}">
                                    Default Radio ${formCount}
                                </label>
                            </div>
                        </div>
                        <div class="col" style="flex: 1;">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${formCount}" value="option2">
                                <label class="form-check-label" contenteditable="true" for="exampleRadios${formCount}">
                                    Default Radio ${formCount}
                                </label><button type="button" class="btn delete-button float-right"><i class="fas fa-times"></i></button>
                            </div>
                        </div>
                    </div>

                </span>
            </div>
        `)
    })
    
    //------------------------------------
    //          ADD SELECT FIELD
    //------------------------------------
    
   /*  $("#selectField").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput col-md-6">
                <span>
                    <div class="form-group">
                        <label for="exampleFormControlSelect${formCount}" contenteditable="true" class="font-weight-bold">Example select ${formCount}</label><button type="button" class="btn delete-button float-right"><i class="fas fa-times"></i></button>
                            <select class="form-control"  id="exampleFormControlSelect${formCount}">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                    </div>
                </span>
            </div>
        `)
    }) */

    $("#selectField").on("click", function(){
        formCount++;
    
        var selectId = `exampleFormControlSelect${formCount}`;
        var inputId = `optionInput${formCount}`;
    
        $("#thisForm").append(`
            <div class="formInput col-md-6">
                <span>
                    <div class="form-group">
                        <label for="${selectId}" class="font-weight-bold" contenteditable="true">Edita el título del formulario ${formCount}</label>
                        <button type="button" class="btn delete-button float-right mb-3"><i class="fas fa-times"></i></button>
                        <select class="form-control" id="${selectId}"></select>
                        <input type="text" class="form-control mt-4 mb-2" placeholder="Ingresa una opción para sumar a la lista" id="${inputId}">
                        <button type="button" class="btn btn-primary add-option-btn" onclick="addOption('${selectId}', '${inputId}')">Agregar opción</button>
                      
                       
                    </div>
                </span>
            </div>
        `);
    });

    
    //---------------------------------------------
    //          ADD MULTIPLE SELECT FIELD
    //---------------------------------------------
    
    $("#multipleSelectField").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput">
                <span>
                    <div class="form-group">
                        <label for="exampleFormControlSelect${formCount}" contenteditable="true" class="font-weight-bold">Example multiple select ${formCount}</label><button type="button" class="btn delete-button float-right"><i class="fas fa-times"></i></button>
                            <select multiple class="form-control" id="exampleFormControlSelect${formCount}">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                    </div>
                </span>
            </div>
        `)
    })
    
    //---------------------------------
    //          ADD TEXTAREA
    //---------------------------------
    
    $("#addTextArea").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput">
                <span>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea${formCount}" contenteditable="true" class="font-weight-bold">Example textarea ${formCount}</label><button type="button" class="btn delete-button float-right"><i class="fas fa-times"></i></button>
                        <textarea class="form-control" id="exampleFormControlTextarea${formCount}" rows="3"></textarea>
                    </div>
                </span>
            </div>
        `)
    })
    
    //----------------------------------
    //          DELETE BUTTON
    //----------------------------------
    
    $("body").delegate('.delete-button','click', function(event){
        event.preventDefault();
        $(this).closest('.formInput').remove();
    });





    