function updateAnalogClock() {
  const now = new Date(); //Crée un nouvel objet Date avec l'heure actuelle

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calcule les degrés de rotation pour chaque aiguille
  // La petite astuce pour les heures/minutes/secondes :
  // Chaque 'tic' des secondes et minutes est de 6 degrés (360 degrés / 60 unités).
  // Chaque 'tic' des heures est de 30 degrés (360 degrés / 12 unités).
  // On ajoute un petit décalage pour que les aiguilles soient plus fluides
  // (par exemple, l'aiguille des heures avance un peu quand les minutes tournent).

  const secondsDegrees = (seconds / 60) * 360 + 90; // + 90 car le CSS de base est à 90deg (3h/15min/30s)
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 0;
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 0;

  // Récupère les éléments des aiguilles
  const secondeAiguille = document.querySelector(".aiguille.seconde");
  const minuteAiguille = document.querySelector(".aiguille.minute");
  const heureAiguille = document.querySelector(".aiguille.heure");

  // Applique la rotation via la propriété CSS 'transform'
  secondeAiguille.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;
  minuteAiguille.style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`;
  heureAiguille.style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`;
}

// Appelle la fonction une première fois pour afficher l'heure au chargement
updateAnalogClock();

// Met à jour l'horloge toutes les secondes (1000 millisecondes)
setInterval(updateAnalogClock, 1000);
