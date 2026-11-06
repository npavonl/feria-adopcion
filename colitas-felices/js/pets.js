/* Datos editables de Colitas Felices. Para agregar un peludito: copia un bloque, cambia los datos
   y sube la foto a img/peluditos/<id>.webp (fondo transparente, en WebP).
   lines  = texto de la ficha, un elemento por renglón (se justifica cada renglón; el último va a la izquierda).
   fs     = (opcional) tamaño del texto en cqw si el texto es largo; el normal es 3.209.
   x, y, w, h = posición de la foto dentro de la ficha 4:5 (en %).
   health = datos de salud que dice la ficha original (esterilizado, desparasitado, vacunas).
   notes  = (opcional) otras etiquetas que se muestran junto a la ficha. */
const ORG = {"name": "Colitas Felices", "phone": "593983750246", "mail": "colitasfelices.diana@gmail.com"};
const PETS = [
 {
  "id": "camila",
  "name": "Camila",
  "sp": "perro",
  "label": "Perrita mediana",
  "age": "2 años",
  "lines": [
   "Soy Camila, tengo 2 años y soy de",
   "tamaño mediano. Soy sociable con",
   "personas y perros. Estoy esterilizada,",
   "desparasitada y tengo mis vacunas al",
   "día. ¡No ladro, aúllo! Busco una familia",
   "que me dé mucho amor."
  ],
  "x": 40.414,
  "y": 28.175,
  "w": 22.239,
  "h": 43.677,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "amapola",
  "name": "Amapola",
  "sp": "perro",
  "label": "Perrita mediana",
  "age": "3 años",
  "lines": [
   "Soy Amapola, tengo 3 años y soy de",
   "tamaño mediano. Soy sociable con",
   "personas y animales. Estoy esterilizada,",
   "desparasitada y tengo mis vacunas",
   "al día. Busco una familia que me dé",
   "mucho amor."
  ],
  "x": 32.88,
  "y": 26.177,
  "w": 34.068,
  "h": 47.347,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "franklin",
  "name": "Franklin",
  "sp": "perro",
  "label": "Perrito pequeño",
  "age": "5 años",
  "lines": [
   "Soy Franklin, tengo 5 años y soy",
   "pequeño, sociable y cariñoso. Camino",
   "con arnés y viajo sin problema en auto.",
   "Estoy esterilizado, desparasitado y con",
   "vacunas al día. ¡Listo para compartir",
   "paseos y nuevas aventuras contigo!"
  ],
  "x": 33.486,
  "y": 27.63,
  "w": 38.134,
  "h": 45.086,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "oso",
  "name": "Oso",
  "sp": "perro",
  "label": "Perrito grande",
  "age": "4 años",
  "lines": [
   "Soy Oso, tengo 4 años y soy grande,",
   "sociable, protector y amoroso. Me",
   "llevo bien con perros y niños. Estoy",
   "esterilizado, desparasitado y tengo mis",
   "vacunas al día. ¡Tengo un gran corazón y",
   "muchas ganas de ser parte de tu hogar!"
  ],
  "fs": 3.149,
  "x": 36.271,
  "y": 26.939,
  "w": 27.457,
  "h": 45.776,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "luna",
  "name": "Luna",
  "sp": "perro",
  "label": "Perrita grande",
  "age": "3 años",
  "lines": [
   "Soy Luna, tengo 3 años y soy de tamaño",
   "grande. Soy sociable con personas y",
   "perros, y me encantan los paseos. Estoy",
   "esterilizada, desparasitada y tengo mis",
   "vacunas al día. ¿Salimos a caminar? Quiero",
   "descubrir nuevos caminos a tu lado."
  ],
  "fs": 2.989,
  "x": 16.281,
  "y": 30.062,
  "w": 67.978,
  "h": 40.517,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "lilo",
  "name": "Lilo",
  "sp": "perro",
  "label": "Perrita mediana",
  "age": "2 años",
  "lines": [
   "Soy Lilo, tengo 2 años y soy mediana.",
   "Soy sociable con personas y perros; me",
   "encanta compartir y estar acompañada.",
   "Estoy esterilizada, desparasitada y",
   "tengo mis vacunas al día. ¡Los mejores",
   "momentos son los que compartimos!"
  ],
  "x": 29.209,
  "y": 30.718,
  "w": 43.013,
  "h": 38.733,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "masmellow",
  "name": "Masmellow",
  "sp": "perro",
  "label": "Perrita mediana",
  "age": "3 años",
  "lines": [
   "Soy Masmellow, tengo 3 años y mi",
   "tamaño es mediano. Soy sociable con",
   "personas y perros, faldera y apta para",
   "departamentos. Estoy esterilizada,",
   "desparasitada y tengo mis vacunas al día.",
   "¡Mi lugar favorito puede ser tu regazo!"
  ],
  "fs": 3.089,
  "x": 36.603,
  "y": 28.426,
  "w": 28.584,
  "h": 44.13,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  },
  "notes": [
   "Apta para departamento"
  ]
 },
 {
  "id": "arenita",
  "name": "Arenita",
  "sp": "perro",
  "label": "Perrita mediana",
  "age": "2 años",
  "lines": [
   "Soy Arenita, tengo 2 años y soy de tamaño",
   "mediano. Soy sociable con personas y perros,",
   "y una gran compañera para niños y adultos. Por",
   "mi carácter cariñoso, puedo ser una excelente",
   "compañera emocional. Estoy esterilizada,",
   "desparasitada y tengo mis vacunas al día.",
   "¡Quiero llenar tus días con amor y compañía!"
  ],
  "fs": 2.689,
  "x": 29.971,
  "y": 28.798,
  "w": 41.516,
  "h": 42.484,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "lili",
  "name": "Lili",
  "sp": "perro",
  "label": "Perrita grande",
  "age": "4 años",
  "lines": [
   "Soy Lili, tengo 4 años y soy de tamaño",
   "grande. Tengo educación básica, soy",
   "una linda compañía y me gustan los",
   "paseos. Estoy esterilizada, desparasitada",
   "y tengo mis vacunas al día. ¡Sueño con",
   "ser parte de tu vida y pasear contigo!"
  ],
  "fs": 3.119,
  "x": 37.929,
  "y": 27.842,
  "w": 28.982,
  "h": 44.343,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "suko",
  "name": "Suko",
  "sp": "perro",
  "label": "Perrito grande",
  "age": "4 años",
  "lines": [
   "Soy Suko, tengo 4 años y soy de tamaño",
   "grande. Me encanta pasear, jugar y",
   "abrazar. Me llevo bien con otros perros.",
   "Estoy esterilizado y tengo mis vacunas",
   "y desparasitación al día. ¡Tengo muchos",
   "abrazos y juegos para compartir contigo!"
  ],
  "fs": 3.139,
  "x": 38.195,
  "y": 26.992,
  "w": 24.605,
  "h": 45.67,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 }
];
