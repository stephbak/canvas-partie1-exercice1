var c = document.getElementById("house");
  var ctx = c.getContext("2d");
  //structure maison
  ctx.beginPath();  //début du chemin
ctx.moveTo(80,120);//le tracé part du poiint 80,120: (y,x)
ctx.lineTo(320,120);//la ligne va du point 80, 120 au point 320,120
ctx.lineTo(320,360);//pour aller au point 320, 360
ctx.lineTo(80,360);
ctx.lineTo(80,120);
ctx.fillStyle = "#aad5e8"; // Définition de la couleur de remplissage
ctx.fill();


//toit
ctx.beginPath();
ctx.moveTo(80,120);
ctx.lineTo(200,40);
ctx.lineTo(320,120);
ctx.closePath();
ctx.fillStyle = "#cd8b2c"; // Définition de la couleur de remplissage
ctx.fill();//remplissage de la couleur


//porte
ctx.beginPath();
ctx.moveTo(160,360);
ctx.lineTo(160,280);
ctx.lineTo(240,280);
ctx.lineTo(240,360);
ctx.lineTo(160,360);
ctx.closePath();//fermeture du chemin
ctx.fillStyle = "#c9c9c9"; // Définition de la couleur de remplissage
ctx.fill();


//fenêtre gauche
ctx.beginPath();  //début du chemin
ctx.moveTo(100,140);
ctx.lineTo(160,140);
ctx.lineTo(160,200);
ctx.lineTo(100,200);
ctx.lineTo(100,140);
ctx.closePath();//fermeture du chemin
ctx.fillStyle = "#c9c9c9"; // Définition de la couleur de remplissage
ctx.fill();


//fenêtre droite
ctx.beginPath();  //début du chemin
ctx.moveTo(240,140);
ctx.lineTo(300,140);
ctx.lineTo(300,200);
ctx.lineTo(240,200);
ctx.lineTo(240,140);
ctx.closePath();//fermeture du chemin
ctx.fillStyle = "#c9c9c9"; // Définition de la couleur de remplissage
ctx.fill();
