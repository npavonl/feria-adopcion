/* Datos editables de Vuelve & Viduka. Para agregar un peludito: copia un bloque, cambia los datos
   y sube la foto a img/peluditos/<id>.webp (fondo transparente, en WebP).
   lines  = texto de la ficha, un elemento por renglón (se justifica cada renglón; el último va a la izquierda).
   fs     = (opcional) tamaño del texto en cqw si el texto es largo; el normal es 3.209.
   x, y, w, h = posición de la foto dentro de la ficha 4:5 (en %).
   health = datos de salud que dice la ficha original (esterilizado, desparasitado, vacunas).
   notes  = (opcional) otras etiquetas que se muestran junto a la ficha. */
const ORG = {"name": "Vuelve & Viduka", "phone": "593960666396", "mail": "vuelve_y_viduka@hotmail.com"};
const PETS = [
 {
  "id": "murci",
  "name": "Murci",
  "sp": "perro",
  "label": "Perrita",
  "age": "3 años",
  "lines": [
   "¡Hola, me llamo MURCI! Soy una perrita",
   "de 3 años. Tengo una personalidad",
   "muy amable, relajada y cariñosa. Me",
   "encanta estar con las personas."
  ],
  "x": 31.229,
  "y": 26.554,
  "w": 33.345,
  "h": 46.621
 },
 {
  "id": "luli",
  "name": "Luli",
  "sp": "perro",
  "label": "Perrita",
  "age": "2 años",
  "lines": [
   "¡Hola, mi nombre es LULI! Soy una",
   "perrita de 2 años. Soy juguetona y muy",
   "cariñosa. También me encanta recibir",
   "mimos de las personas."
  ],
  "x": 17.32,
  "y": 26.188,
  "w": 51.136,
  "h": 47.906
 },
 {
  "id": "sami",
  "name": "Sami",
  "sp": "perro",
  "label": "Perrita",
  "age": "1 año",
  "lines": [
   "¡Hola, mi nombre es SAMI! Soy",
   "una perrita de 1 año, muy alegre y",
   "juguetona. Me gusta jugar con otros",
   "perritos; todavía me cuesta un poco",
   "confiar en las personas, pero con amor",
   "y paciencia seguro confiaré en ti."
  ],
  "x": 28.683,
  "y": 25.846,
  "w": 52.428,
  "h": 48.066
 },
 {
  "id": "brilla",
  "name": "Brilla",
  "sp": "perro",
  "label": "Perrita",
  "age": "3 años",
  "lines": [
   "¡Hola! Soy una perrita de 3 años, tengo",
   "mucha energía, me encanta correr y",
   "jugar con otros peluditos y con las",
   "personas. Mi alegría es contagiosa y",
   "puedo convertir un día gris en uno lleno",
   "de color."
  ],
  "x": 37.371,
  "y": 25.488,
  "w": 42.926,
  "h": 49.318
 },
 {
  "id": "guapo",
  "name": "Guapo",
  "sp": "perro",
  "label": "Perrito",
  "age": "3 años",
  "lines": [
   "¡Hola, soy GUAPO! Soy un perrito de 3",
   "años, muy amistoso y cariñoso con las",
   "personas. También me gusta jugar",
   "mucho con otros perritos tranquilos y",
   "educados como yo."
  ],
  "x": 38.327,
  "y": 27.481,
  "w": 26.631,
  "h": 46.661
 },
 {
  "id": "bia",
  "name": "Bía",
  "sp": "perro",
  "label": "Perrita",
  "age": "2 años",
  "lines": [
   "¡Hola! Soy una perrita de 2 años. Me",
   "encanta jugar con otros peluditos y",
   "tengo el don de transmitirles paz para",
   "que se sientan cómodos, como yo, con",
   "otros perritos y con las personas."
  ],
  "x": 12.412,
  "y": 33.821,
  "w": 70.632,
  "h": 32.291
 },
 {
  "id": "falafel",
  "name": "Falafel",
  "sp": "perro",
  "label": "Perrito",
  "age": "7 años",
  "lines": [
   "¡Hola, soy FALAFEL! Soy un perrito de 7",
   "años. Soy juguetón y amoroso con las",
   "personas. Me encantan los mimos y",
   "sueño con encontrar una familia para",
   "llenar su vida de amor."
  ],
  "x": 20.279,
  "y": 29.038,
  "w": 63.581,
  "h": 43.252
 },
 {
  "id": "hazna",
  "name": "Hazna",
  "sp": "perro",
  "label": "Perrito",
  "age": "3 años",
  "lines": [
   "¡Hola, soy HAZNA! Soy un perrito de 3",
   "años. Me gusta ser un líder y cuidar de",
   "mis amigos. Me encanta correr, jugar a",
   "la pelota y pasear con otros perritos y",
   "con las personas."
  ],
  "x": 34.644,
  "y": 26.544,
  "w": 37.886,
  "h": 46.159
 },
 {
  "id": "oreo",
  "name": "Oreo",
  "sp": "perro",
  "label": "Perrito",
  "age": "2 años",
  "lines": [
   "¡Hola, soy OREO! Soy un perrito de 2",
   "años, me encanta jugar con las",
   "personas y con otros perritos. Me gusta",
   "ser líder, pero también relajarme y",
   "disfrutar de la compañía de las",
   "personas."
  ],
  "x": 18.232,
  "y": 37.842,
  "w": 67.432,
  "h": 23.703
 },
 {
  "id": "casti",
  "name": "Casti",
  "sp": "perro",
  "label": "Perrito",
  "age": "6 años",
  "lines": [
   "¡Hola, me llamo CASTI! Soy un perrito de 6",
   "años de edad. Soy muy alegre y noble, me",
   "gusta recibir a la personas cuando llegan",
   "de visita. Tengo un tumor en mi nariz, por",
   "ello mi deseo es tener una familia y disfrutar",
   "con ellos el tiempo de vida que me queda."
  ],
  "fs": 2.929,
  "x": 15.6,
  "y": 27.569,
  "w": 63.642,
  "h": 44.272,
  "notes": [
   "Tiene un tumor en la nariz"
  ]
 }
];
