/* Datos editables de Paraíso Huellas. Para agregar un peludito: copia un bloque, cambia los datos
   y sube la foto a img/peluditos/<id>.webp (fondo transparente, en WebP).
   lines  = texto de la ficha, un elemento por renglón (se justifica cada renglón; el último va a la izquierda).
   fs     = (opcional) tamaño del texto en cqw si el texto es largo; el normal es 3.209.
   x, y, w, h = posición de la foto dentro de la ficha 4:5 (en %).
   health = datos de salud que dice la ficha original (esterilizado, desparasitado, vacunas).
   notes  = (opcional) otras etiquetas que se muestran junto a la ficha. */
const ORG = {"name": "Paraíso Huellas", "phone": "593982382415", "mail": "paraisoanimalec@outlook.com"};
const PETS = [
 {
  "id": "zuko",
  "name": "Zuko",
  "sp": "perro",
  "label": "Perrito grande",
  "age": "6 años",
  "lines": [
   "Soy Zuko, un macho de tamaño grande",
   "y unos 6 años. Soy juguetón, amoroso y",
   "disfruto de los paseos tranquilos. Estoy",
   "esterilizado y tengo mis vacunas al día.",
   "¡Caminemos sin prisa y llenemos",
   "nuestros días de cariño!"
  ],
  "x": 28.559,
  "y": 26.568,
  "w": 42.87,
  "h": 46.148,
  "health": {
   "esterilizado": true,
   "vacunas": true
  }
 },
 {
  "id": "paquita",
  "name": "Paquita",
  "sp": "perro",
  "label": "Perrita grande",
  "age": "6 años",
  "lines": [
   "Soy Paquita, una perrita grande de unos",
   "6 años. Soy activa, inteligente y muy",
   "amorosa; me encantan los paseos.",
   "Estoy esterilizada y tengo mis vacunas",
   "al día. ¡Compartamos paseos, aventuras",
   "y mucho cariño!"
  ],
  "x": 27.983,
  "y": 26.568,
  "w": 44.074,
  "h": 46.148,
  "health": {
   "esterilizado": true,
   "vacunas": true
  }
 },
 {
  "id": "bella",
  "name": "Bella",
  "sp": "perro",
  "label": "Perrita mediana",
  "age": "3 años",
  "lines": [
   "Soy Bella, una perrita mediana de unos",
   "3 años. Tengo buen temperamento, soy",
   "activa y juguetona. Estoy esterilizada y",
   "tengo mis vacunas al día. ¡Dale un lugar",
   "a mis juegos y a mi alegría en tu hogar!"
  ],
  "x": 28.019,
  "y": 26.568,
  "w": 43.981,
  "h": 46.148,
  "health": {
   "esterilizado": true,
   "vacunas": true
  }
 },
 {
  "id": "metro",
  "name": "Metro",
  "sp": "perro",
  "label": "Perrito grande",
  "age": "6 años",
  "lines": [
   "Soy Metro, un perro grande de unos 6",
   "años. Soy cariñoso e inteligente, y",
   "disfruto de los largos paseos y los",
   "juegos. Estoy esterilizado y tengo mis",
   "vacunas al día. ¡A tu lado, cada paseo",
   "puede ser el inicio de una gran amistad!"
  ],
  "x": 26.433,
  "y": 26.568,
  "w": 47.13,
  "h": 46.148,
  "health": {
   "esterilizado": true,
   "vacunas": true
  }
 },
 {
  "id": "luz",
  "name": "Luz",
  "sp": "perro",
  "label": "Perrita mediana",
  "age": "4 años",
  "lines": [
   "Soy Luz, una perrita mediana de unos 4",
   "años. Soy juguetona, cariñosa y",
   "tranquila. Estoy esterilizada y tengo mis",
   "vacunas al día. ¡Me encantaría llenar tus",
   "días de juegos, ternura y momentos de",
   "calma!"
  ],
  "x": 30.432,
  "y": 23.957,
  "w": 42.87,
  "h": 51.333,
  "health": {
   "esterilizado": true,
   "vacunas": true
  }
 },
 {
  "id": "juanito",
  "name": "Juanito",
  "sp": "perro",
  "label": "Perrito grande",
  "age": "6 años",
  "lines": [
   "Soy Juanito, un perro grande de unos 6",
   "años. Soy activo, muy amoroso e",
   "inteligente, y me encantan los paseos.",
   "Estoy esterilizado y tengo mis vacunas",
   "al día. ¡Busco un hogar donde compartir",
   "caminos y regalar todo mi cariño!"
  ],
  "x": 28.163,
  "y": 26.568,
  "w": 43.704,
  "h": 46.148,
  "health": {
   "esterilizado": true,
   "vacunas": true
  }
 },
 {
  "id": "negrita",
  "name": "Negrita",
  "sp": "perro",
  "label": "Perrita mediana",
  "age": "4 años",
  "lines": [
   "Soy Negrita, una perrita mediana de",
   "unos 4 años. Soy juguetona, cariñosa y",
   "tranquila. Estoy esterilizada y tengo mis",
   "vacunas al día. ¡Tengo ganas de",
   "compartir contigo tardes de juegos y",
   "ratitos de compañía!"
  ],
  "x": 33.333,
  "y": 26.983,
  "w": 33.333,
  "h": 45.259,
  "health": {
   "esterilizado": true,
   "vacunas": true
  }
 },
 {
  "id": "laica",
  "name": "Laica",
  "sp": "perro",
  "label": "Perrita mediana",
  "age": "4 años",
  "lines": [
   "Soy Laica, una perrita mediana de unos",
   "4 años. Soy cariñosa y tranquila. Estoy",
   "esterilizada y tengo mis vacunas al día.",
   "¡Sueño con un hogar donde disfrutar de",
   "las pequeñas cosas y estar cerquita de",
   "ti!"
  ],
  "x": 28.704,
  "y": 27.138,
  "w": 42.593,
  "h": 44.963,
  "health": {
   "esterilizado": true,
   "vacunas": true
  }
 },
 {
  "id": "lola",
  "name": "Lola",
  "sp": "perro",
  "label": "Perrita mediana",
  "age": "5 años",
  "lines": [
   "Soy Lola, una perrita mediana de unos 5",
   "años. Tengo buen temperamento, soy",
   "activa y juguetona. Estoy esterilizada y",
   "tengo mis vacunas al día. ¡Hagamos de",
   "cada día una nueva oportunidad para",
   "jugar y ser felices juntos!"
  ],
  "x": 28.704,
  "y": 27.101,
  "w": 42.593,
  "h": 45.037,
  "health": {
   "esterilizado": true,
   "vacunas": true
  }
 },
 {
  "id": "dona",
  "name": "Dona",
  "sp": "perro",
  "label": "Perrita mediana",
  "age": "4 años",
  "lines": [
   "Soy Dona, una perrita mediana de unos",
   "4 años. Soy juguetona, cariñosa y",
   "tranquila. Estoy esterilizada y tengo mis",
   "vacunas al día. ¡Entre juegos y",
   "momentos de calma, quiero escribir una",
   "bonita historia contigo!"
  ],
  "x": 28.704,
  "y": 27.176,
  "w": 42.593,
  "h": 44.889,
  "health": {
   "esterilizado": true,
   "vacunas": true
  }
 },
 {
  "id": "sheila",
  "name": "Sheila",
  "sp": "perro",
  "label": "Perrita mediana",
  "age": "6 años",
  "lines": [
   "Soy Sheila, una perrita mediana de unos",
   "6 años. Soy tranquila, amorosa y muy",
   "inteligente. Estoy esterilizada y tengo",
   "mis vacunas al día. ¡Quiero encontrar mi",
   "lugar a tu lado y llenar de ternura",
   "nuestros días!"
  ],
  "x": 25.347,
  "y": 27.407,
  "w": 49.352,
  "h": 44.444,
  "health": {
   "esterilizado": true,
   "vacunas": true
  }
 }
];
