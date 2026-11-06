/* Datos editables de Ayuda Animal Carcelén. Para agregar un peludito: copia un bloque, cambia los datos
   y sube la foto a img/peluditos/<id>.webp (fondo transparente, en WebP).
   lines  = texto de la ficha, un elemento por renglón (se justifica cada renglón; el último va a la izquierda).
   fs     = (opcional) tamaño del texto en cqw si el texto es largo; el normal es 3.209.
   x, y, w, h = posición de la foto dentro de la ficha 4:5 (en %).
   health = datos de salud que dice la ficha original (esterilizado, desparasitado, vacunas).
   notes  = (opcional) otras etiquetas que se muestran junto a la ficha. */
const ORG = {"name": "Ayuda Animal Carcelén", "phone": "593994119208", "mail": "lia_alejandra@outlook.com"};
const PETS = [
 {
  "id": "einstein",
  "name": "Einstein",
  "sp": "perro",
  "label": "Perrito",
  "age": "3 años",
  "lines": [
   "¡Hola, me llamo Einstein! Soy un perrito de",
   "3 años. Soy alegre y me gusta compartir",
   "mi tiempo con las personas que conozco.",
   "Padezco de convulsiones; sin embargo, con",
   "mi medicina puedes ayudarme a controlarlas.",
   "¿Me darías una segunda oportunidad?"
  ],
  "fs": 2.839,
  "x": 29.151,
  "y": 25.396,
  "w": 36.709,
  "h": 45.035,
  "notes": [
   "Toma medicina para sus convulsiones"
  ]
 },
 {
  "id": "pistacho",
  "name": "Pistacho",
  "sp": "perro",
  "label": "Perrito",
  "age": "3 años",
  "lines": [
   "¡Hola, me llamo Pistacho! Soy un perrito",
   "de 3 años de edad. Me encanta dar cariño",
   "a las personas que conozco. Todavía me",
   "cuesta un poco confiar en las personas,",
   "pero tengo buen olfato para identificar a",
   "quienes tienen buen corazón, ¡como tú!"
  ],
  "fs": 3.039,
  "x": 33.135,
  "y": 26.824,
  "w": 32.928,
  "h": 47.251
 },
 {
  "id": "avellana",
  "name": "Avellana",
  "sp": "perro",
  "label": "Perrita",
  "age": "3 años",
  "lines": [
   "¡Hola, me llamo Avellana! Soy una",
   "perrita de 3 años de edad. Soy muy",
   "educada y cariñosa. Me llevo muy bien",
   "con otros perritos y me encanta que",
   "me mimen."
  ],
  "x": 35.321,
  "y": 26.458,
  "w": 39.35,
  "h": 46.339
 },
 {
  "id": "katry",
  "name": "Katry",
  "sp": "perro",
  "label": "Perrita",
  "age": "8 años",
  "lines": [
   "¡Hola, me llamo Katry! Soy una perrita",
   "de 8 años de edad, activa, juguetona y",
   "cariñosa. ¡Tengo toda una vida contigo",
   "por delante, para llenar tus días de",
   "alegría y amor!"
  ],
  "x": 20.092,
  "y": 28.403,
  "w": 59.003,
  "h": 43.989
 }
];
