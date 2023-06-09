$(document).ready(function () {

   let encuesta_salud_jose={
      año:"19",
      peso:"45 kg",
      alto:"1.68 cm",
      ejercicio:"Ciclismo"
   }

   let encuesta_redes_mati={
      archi:"Si, es que me gusta jugar juegos gratis",
      virus:"Si, me tuve que instalar un antivirus porque la compu me funcionaba mal",
      terminos:"No conosco ninguno de estos terminos",
      hack:"Si me hackearon la cuenta de instagram. La deje de usar y me cree otra"
   }

   let encuesta_vivienda_tomi={
      vivi: "Vivo con mi mama",
      casa: "Vivo en departamento",
      tren:"Si",
      garage: "Si tengo garage",
   }
   

   $("#año").text(encuesta_salud_jose.año)
   $("#peso").text(encuesta_salud_jose.peso)
   $("#alto").text(encuesta_salud_jose.alto)
   $("#ejercicio").text(encuesta_salud_jose.ejercicio)

   $("#archivos").text(encuesta_redes_mati.archi)
   $("#virus").text(encuesta_redes_mati.virus)
   $("#terminos").text(encuesta_redes_mati.terminos)
   $("#hack").text(encuesta_redes_mati.hack)

   $("#vivi").text(encuesta_vivienda_tomi.vivi)
   $("#casa").text(encuesta_vivienda_tomi.casa)
   $("#tren").text(encuesta_vivienda_tomi.tren)
   $("#garage").text(encuesta_vivienda_tomi.garage)

})
