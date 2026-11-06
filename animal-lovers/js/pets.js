/* Datos editables de Animal Lovers EC. Para agregar un peludito: copia un bloque, cambia los datos
   y sube la foto a img/peluditos/<id>.webp (fondo transparente, en WebP).
   lines  = texto de la ficha, un elemento por renglón (se justifica cada renglón; el último va a la izquierda).
   fs     = (opcional) tamaño del texto en cqw si el texto es largo; el normal es 3.209.
   x, y, w, h = posición de la foto dentro de la ficha 4:5 (en %).
   health = datos de salud que dice la ficha original (esterilizado, desparasitado, vacunas).
   notes  = (opcional) otras etiquetas que se muestran junto a la ficha. */
const ORG = {"name": "Animal Lovers EC", "phone": "593987819688", "mail": "animalloversec.2022@gmail.com"};
const PETS = [
 {
  "id": "asia",
  "name": "Asia",
  "sp": "perro",
  "label": "Perrita",
  "age": "3 años",
  "lines": [
   "¡Hola, me llamo Asia! Soy una perrita de 3",
   "años. Soy sensible y cariñosa, y me encanta",
   "recibir atención. Prefiero ser la única perrita de",
   "la casa, aunque también puedes adoptarme",
   "junto a Rufo, mi mejor amigo. ¿Me darías la",
   "oportunidad de formar parte de tu familia?"
  ],
  "fs": 2.759,
  "x": 25.704,
  "y": 28.316,
  "w": 42.164,
  "h": 44.426,
  "notes": [
   "Se puede adoptar junto a Rufo"
  ]
 },
 {
  "id": "rufo",
  "name": "Rufo",
  "sp": "perro",
  "label": "Perrito",
  "age": "2 años",
  "lines": [
   "¡Hola, me llamo Rufo! Soy un perrito de 2",
   "años. Soy tranquilo, cariñoso y juguetón. Me",
   "encanta jugar con la pelota y salir de paseo.",
   "Me encantaría encontrar un hogar junto a",
   "Asia, mi mejor amiga, pero puedo llevarme",
   "bien con otros perritos también. ¿Te animas a",
   "adoptarme?"
  ],
  "fs": 2.749,
  "x": 26.472,
  "y": 27.154,
  "w": 43.219,
  "h": 45.538,
  "notes": [
   "Se puede adoptar junto a Asia"
  ]
 },
 {
  "id": "orejas",
  "name": "Orejas",
  "sp": "perro",
  "label": "Perrito",
  "age": "2 años",
  "lines": [
   "¡Hola, me llamo Orejas! Tengo 2 añitos.",
   "Soy tranquilo y disfruto de la compañía de",
   "otros perritos, por eso necesito un hogar",
   "donde tenga un compañero. Me encanta",
   "pasear. Necesito cuidar mi alimentación y a",
   "mantenerme activo para evitar el sobrepeso.",
   "¿Me haces parte de tu familia?"
  ],
  "fs": 2.749,
  "x": 30.281,
  "y": 29.721,
  "w": 40.782,
  "h": 42.971,
  "notes": [
   "Mejor con otro perrito",
   "Cuidar su peso"
  ]
 },
 {
  "id": "igor",
  "name": "Igor",
  "sp": "perro",
  "label": "Perrito",
  "age": "2 años",
  "lines": [
   "¡Hola, me llamo Igor! Soy un perrito de 2",
   "años. Soy muy juguetón, amoroso y cariñoso.",
   "Cuando tomo confianza, me convierto en",
   "un compañero muy especial. Me gustaría",
   "encontrar una familia con otro perrito",
   "compatible conmigo para jugar y compartir.",
   "¿Me das la oportunidad de quererte?"
  ],
  "fs": 2.749,
  "x": 27.835,
  "y": 27.661,
  "w": 42.786,
  "h": 45.082,
  "notes": [
   "Mejor con otro perrito"
  ]
 },
 {
  "id": "linda",
  "name": "Linda",
  "sp": "perro",
  "label": "Perrita",
  "age": "2 años",
  "lines": [
   "¡Hola, me llamo Linda! Soy una perrita",
   "de 2 años. Soy dulce, tierna y cariñosa.",
   "Disfruto de la compañía de las personas",
   "y de otros perritos. Busco una familia",
   "que me reciba con amor. ¿Me dejas",
   "compartir mi cariño contigo?"
  ],
  "x": 25.587,
  "y": 26.921,
  "w": 43.49,
  "h": 45.824
 },
 {
  "id": "guapo",
  "name": "Guapo",
  "sp": "perro",
  "label": "Perrito",
  "age": "10 meses",
  "lines": [
   "¡Hola, me llamo Guapo! Soy un perrito",
   "de 10 meses. Soy tranquilo y sociable. Al",
   "principio puedo ser un poquito tímido pero",
   "con paciencia y cariño puedes ayudarme",
   "a ganar confianza para compartir ¡toda",
   "una vida de amor y alegría contigo!"
  ],
  "fs": 3.039,
  "x": 16.674,
  "y": 28.412,
  "w": 42.122,
  "h": 44.383
 },
 {
  "id": "terry",
  "name": "Terry",
  "sp": "perro",
  "label": "Perrito",
  "age": "5 años",
  "lines": [
   "¡Hola, me llamo Terry! Soy un perrito de",
   "5 años. Soy dócil y amoroso. Necesito",
   "una familia paciente, que me cuide y me",
   "ayude a adaptarme a mi nuevo hogar. Solo",
   "necesito un poco de tiempo para mostrarte",
   "¡todo el amor que tengo para darte!"
  ],
  "fs": 2.989,
  "x": 32.002,
  "y": 28.015,
  "w": 42.401,
  "h": 44.676
 },
 {
  "id": "bombon",
  "name": "Bombón",
  "sp": "perro",
  "label": "Perrita",
  "age": "5 años",
  "lines": [
   "¡Hola, me llamo Bombón! Soy una perrita de 5",
   "años. Al principio soy tímida, pero cuando me",
   "siento segura muestro mi lado más amoroso.",
   "He perdido la visión en uno de mis ojitos y",
   "busco una familia paciente que me brinde un",
   "hogar tranquilo y seguro. ¿Quieres compartir",
   "una vida de amor conmigo?"
  ],
  "fs": 2.749,
  "x": 29.882,
  "y": 27.332,
  "w": 43.099,
  "h": 45.412,
  "notes": [
   "Sin visión en un ojo"
  ]
 },
 {
  "id": "bambina",
  "name": "Bambina",
  "sp": "perro",
  "label": "Perrita",
  "age": "2 años",
  "lines": [
   "¡Hola, me llamo Bambina! Soy una perrita de",
   "2 años. Soy dulce y tierna. Al principio puedo",
   "ser tímida y necesito un poquito de tiempo",
   "para ganar confianza. Busco una familia",
   "paciente que me brinde cariño, seguridad",
   "y estabilidad. ¿Me ayudarías a sentirme",
   "en casa?"
  ],
  "fs": 2.749,
  "x": 26.539,
  "y": 27.588,
  "w": 42.856,
  "h": 45.155
 },
 {
  "id": "lili",
  "name": "Lili",
  "sp": "perro",
  "label": "Perrita",
  "age": "5 años",
  "lines": [
   "¡Hola, me llamo Lili! Soy una perrita de 5 años y",
   "tengo muchísimo amor para dar. Fui rescatada",
   "después de un atropellamiento y vivo con un",
   "solo riñón. No tengo problemas para moverme,",
   "pero necesito que cuides mi alimentación y me",
   "lleves a mis controles veterinarios. ¿Me darías la",
   "oportunidad de recibir y compartir mucho cariño?"
  ],
  "fs": 2.599,
  "x": 24.036,
  "y": 18.56,
  "w": 51.434,
  "h": 54.194,
  "notes": [
   "Un solo riñón",
   "Controles veterinarios"
  ]
 }
];
