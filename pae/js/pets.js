/* Datos editables de PAE. Para agregar un peludito: copia un bloque, cambia los datos
   y sube la foto a img/peluditos/<id>.webp (fondo transparente, en WebP).
   lines  = texto de la ficha, un elemento por renglón (se justifica cada renglón; el último va a la izquierda).
   fs     = (opcional) tamaño del texto en cqw si el texto es largo; el normal es 3.209.
   x, y, w, h = posición de la foto dentro de la ficha 4:5 (en %).
   health = datos de salud que dice la ficha original (esterilizado, desparasitado, vacunas).
   notes  = (opcional) otras etiquetas que se muestran junto a la ficha. */
const ORG = {"name": "PAE", "phone": "593984874670", "mail": "info@pae.ec"};
const PETS = [
 {
  "id": "elodie",
  "name": "Elodie",
  "sp": "perro",
  "label": "Perrita mediana-grande",
  "age": "5 años",
  "lines": [
   "Soy Elodie, una perrita de 5 años y tamaño",
   "mediano-grande. Soy cariñosa, tranquila",
   "y disfruto las interacciones suaves. Estoy",
   "esterilizada y, después de superar graves",
   "ataques de otros perros, estoy lista para",
   "encontrar una familia que me dé el amor y la",
   "paz que merezco."
  ],
  "fs": 2.749,
  "x": 38.611,
  "y": 26.889,
  "w": 29.259,
  "h": 46.074,
  "health": {
   "esterilizado": true
  }
 },
 {
  "id": "fede",
  "name": "Fede",
  "sp": "perro",
  "label": "Perrito mediano",
  "age": "1 año",
  "lines": [
   "Soy Fede, un perrito mestizo de 1 año y",
   "tamaño mediano. Soy juguetón, cariñoso y",
   "estoy lleno de energía. Aunque los ruidos",
   "fuertes todavía me asustan, cada día aprendo",
   "a confiar más. Estoy esterilizado y busco una",
   "familia paciente con la que vivir aventuras y",
   "compartir mucho amor."
  ],
  "fs": 2.749,
  "x": 38.611,
  "y": 26.889,
  "w": 29.352,
  "h": 47.185,
  "health": {
   "esterilizado": true
  }
 },
 {
  "id": "pecosa",
  "name": "Pecosa",
  "sp": "perro",
  "label": "Perrita mediana-grande",
  "age": "3 años",
  "lines": [
   "Soy Pecosa, una perrita de 3 años y tamaño",
   "mediano-grande. Soy dócil, tranquila, cariñosa",
   "y me llevo muy bien con las personas y",
   "otros perros. Me encontraron abandonada",
   "y amarrada en un parque. Estoy esterilizada",
   "y sueño con una familia que me haga sentir",
   "amada y segura para siempre."
  ],
  "fs": 2.749,
  "x": 27.5,
  "y": 27.037,
  "w": 47.222,
  "h": 45.111,
  "health": {
   "esterilizado": true
  },
  "notes": [
   "Se lleva bien con otros perros"
  ]
 },
 {
  "id": "judy",
  "name": "Judy",
  "sp": "perro",
  "label": "Perrita pequeña",
  "age": "3 años",
  "lines": [
   "Soy Judy, una perrita mestiza de 3 años",
   "y tamaño pequeño. Soy dócil, cariñosa y",
   "sociable; me encanta jugar y pasear. Me",
   "abandonaron en una carretera junto a mis seis",
   "cachorritos, pero logramos ser rescatados.",
   "Estoy esterilizada y sueño con una familia que",
   "me ame para siempre."
  ],
  "fs": 2.749,
  "x": 36.667,
  "y": 27.63,
  "w": 33.426,
  "h": 46.741,
  "health": {
   "esterilizado": true
  }
 },
 {
  "id": "ross",
  "name": "Ross",
  "sp": "perro",
  "label": "Cachorrito mediano",
  "age": "4 meses",
  "lines": [
   "Soy Ross, un cachorrito mestizo de 4 meses",
   "y tamaño mediano. Soy sociable, cariñoso",
   "y estoy lleno de energía. Ya recibí mis dos",
   "primeras vacunas múltiples. Me abandonaron",
   "junto a mi mamá y hermanitos en una",
   "carretera, y sueño con crecer en una familia",
   "que nunca me deje atrás."
  ],
  "fs": 2.749,
  "x": 32.5,
  "y": 28.0,
  "w": 38.704,
  "h": 44.815,
  "notes": [
   "Dos primeras vacunas múltiples"
  ]
 },
 {
  "id": "chandler",
  "name": "Chandler",
  "sp": "perro",
  "label": "Cachorrito mediano",
  "age": "4 meses",
  "lines": [
   "Soy Chandler, un cachorrito mestizo de 4 meses y",
   "tamaño mediano. Soy dulce, sociable y muy activo,",
   "así que me encantará jugar y explorar contigo.",
   "Ya recibí mis dos primeras vacunas múltiples. Me",
   "rescataron junto a mi mamá y hermanitos después",
   "de abandonarnos en una carretera. ¿Me das la",
   "oportunidad de crecer rodeado de amor?"
  ],
  "fs": 2.519,
  "x": 34.907,
  "y": 26.889,
  "w": 32.685,
  "h": 47.037,
  "notes": [
   "Dos primeras vacunas múltiples"
  ]
 },
 {
  "id": "gunther",
  "name": "Gunther",
  "sp": "perro",
  "label": "Cachorrito mediano",
  "age": "4 meses",
  "lines": [
   "Soy Gunther, un cachorrito mestizo de 4",
   "meses y tamaño mediano. Tengo muchísima",
   "energía, me encanta jugar y disfruto compartir",
   "con las personas. Ya recibí mis dos primeras",
   "vacunas múltiples. Me abandonaron junto a mi",
   "familia en una carretera, pero sueño con tener",
   "un hogar seguro para toda la vida."
  ],
  "fs": 2.749,
  "x": 31.852,
  "y": 26.889,
  "w": 39.63,
  "h": 47.481,
  "notes": [
   "Dos primeras vacunas múltiples"
  ]
 },
 {
  "id": "monica",
  "name": "Mónica",
  "sp": "perro",
  "label": "Cachorrita mediana",
  "age": "4 meses",
  "lines": [
   "Soy Mónica, una cachorrita mestiza de 4 meses",
   "y tamaño mediano. Soy sociable, tengo mucha",
   "energía y necesito una familia que comparta",
   "conmigo juegos y aventuras. Ya recibí mis dos",
   "primeras vacunas múltiples. Me abandonaron",
   "junto a mi mamá y hermanitos en una carretera,",
   "y sueño con crecer en un hogar lleno de cariño."
  ],
  "fs": 2.679,
  "x": 29.722,
  "y": 28.296,
  "w": 35.37,
  "h": 45.63,
  "notes": [
   "Dos primeras vacunas múltiples"
  ]
 },
 {
  "id": "moly",
  "name": "Moly",
  "sp": "perro",
  "label": "Perrita mediana",
  "age": "5 años",
  "lines": [
   "Soy Moly, una perrita de 5 años y tamaño",
   "mediano. Soy tranquila y dócil, aunque al",
   "principio puedo sentir miedo de las personas.",
   "Con paciencia y cariño estoy aprendiendo a",
   "confiar nuevamente. Ya estoy esterilizada y",
   "busco una familia que respete mis tiempos y",
   "me demuestre que estoy a salvo."
  ],
  "fs": 2.749,
  "x": 39.167,
  "y": 26.889,
  "w": 24.537,
  "h": 47.481,
  "health": {
   "esterilizado": true
  },
  "notes": [
   "Necesita paciencia al inicio"
  ]
 },
 {
  "id": "amelia",
  "name": "Amelia",
  "sp": "perro",
  "label": "Perrita mediana",
  "age": "3 años y medio",
  "lines": [
   "Soy Amelia, una perrita de 3 años y medio",
   "y tamaño mediano. Soy activa, inteligente",
   "y juguetona. Estoy esterilizada y sería una",
   "gran compañera para una familia que disfrute",
   "mantenerse activa. Busco un hogar, de",
   "preferencia con jardín, donde pueda compartir",
   "toda mi energía y cariño."
  ],
  "fs": 2.749,
  "x": 30.741,
  "y": 27.704,
  "w": 36.574,
  "h": 46.667,
  "health": {
   "esterilizado": true
  },
  "notes": [
   "De preferencia, hogar con jardín"
  ]
 }
];
