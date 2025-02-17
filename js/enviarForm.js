const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando Mensaje...';

   const serviceID = 'default_service';
   const templateID = 'template_pbf50r9';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      swal("Mensaje Enviado!", "Te contactare a la brevedad", "success" );
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      swal(JSON.stringify(err, 'error'));
    });
});