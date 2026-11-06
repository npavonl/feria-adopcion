/* Datos editables de AULLA. Para agregar un peludito: copia un bloque, cambia los datos
   y sube la foto a img/peluditos/<id>.webp (fondo transparente, en WebP).
   lines  = texto de la ficha, un elemento por renglón (se justifica cada renglón; el último va a la izquierda).
   fs     = (opcional) tamaño del texto en cqw si el texto es largo; el normal es 3.209.
   x, y, w, h = posición de la foto dentro de la ficha 4:5 (en %).
   health = datos de salud que dice la ficha original (esterilizado, desparasitado, vacunas).
   notes  = (opcional) otras etiquetas que se muestran junto a la ficha. */
const ORG = {"name": "AULLA", "phone": "593987713558", "mail": "aullaecuador@gmail.com"};
const PETS = [
 {
  "id": "avellana",
  "name": "Avellana",
  "sp": "perro",
  "label": "Cachorra",
  "age": "3 meses",
  "lines": [
   "Soy Avellana, una cachorrita de 3 meses.",
   "Soy juguetona, cariñosa y me encanta",
   "descubrir el mundo. Estoy desparasitada",
   "y con mis vacunas al día. Nací en una",
   "quebrada y hoy sueño con una familia",
   "que me vea crecer rodeada de amor."
  ],
  "fs": 3.129,
  "x": 35.994,
  "y": 27.352,
  "w": 40.508,
  "h": 45.82,
  "health": {
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "circe",
  "name": "Circe",
  "sp": "perro",
  "label": "Cachorra",
  "age": "3 meses",
  "lines": [
   "Soy Circe, una cachorrita de 3 meses.",
   "Me encanta jugar, correr y recibir",
   "mimos. Estoy desparasitada y con mis",
   "vacunas al día. Mi comienzo no fue",
   "fácil, pero sigo esperando un hogar",
   "donde pueda ser feliz."
  ],
  "x": 38.815,
  "y": 27.191,
  "w": 28.134,
  "h": 46.078,
  "health": {
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "halaand",
  "name": "Halaand",
  "sp": "perro",
  "label": "Perrito",
  "age": "11 meses",
  "lines": [
   "Soy Halaand, tengo 11 meses. Soy",
   "inteligente, juguetón y muy amable.",
   "Estoy esterilizado, desparasitado y con",
   "mis vacunas al día. Me abandonaron",
   "amarrado fuera del refugio, pero aún",
   "creo en las segundas oportunidades."
  ],
  "x": 37.324,
  "y": 26.288,
  "w": 23.136,
  "h": 46.981,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "tuca",
  "name": "Tuca",
  "sp": "perro",
  "label": "Perrita",
  "age": "3 años",
  "lines": [
   "Soy Tuca, una perrita de 3 años. Soy",
   "cariñosa, juguetona y muy activa. Estoy",
   "esterilizada, desparasitada y con mis vacunas",
   "al día. Después de superar momentos muy",
   "difíciles, solo quiero encontrar una familia que",
   "me ame para siempre."
  ],
  "fs": 2.809,
  "x": 24.627,
  "y": 27.997,
  "w": 48.448,
  "h": 40.242,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "peter-parker",
  "name": "Peter Parker",
  "sp": "perro",
  "label": "Perrito",
  "age": "2 años",
  "lines": [
   "Soy Peter Parker, tengo 2 años. Soy",
   "muy activo, amistoso y siempre estoy",
   "listo para jugar. Estoy esterilizado,",
   "desparasitado y con mis vacunas al día.",
   "Me abandonaron cuando era bebé y",
   "aún espero el hogar que siempre soñé."
  ],
  "x": 29.827,
  "y": 27.803,
  "w": 42.201,
  "h": 45.465,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "tarja",
  "name": "Tarja",
  "sp": "perro",
  "label": "Perrita",
  "age": "2 años",
  "lines": [
   "Soy Tarja, una perrita de 2 años. Soy",
   "amorosa, activa y me encanta compartir",
   "tiempo con las personas. Estoy esterilizada,",
   "desparasitada y con mis vacunas al día. Fui",
   "abandonada junto a mi hija y ahora busco",
   "una familia que nunca me deje atrás."
  ],
  "fs": 2.949,
  "x": 30.391,
  "y": 26.804,
  "w": 36.477,
  "h": 46.465,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "tigris",
  "name": "Tigris",
  "sp": "perro",
  "label": "Perrito",
  "age": "6 años",
  "lines": [
   "Soy Tigris, tengo 6 años. Soy cariñoso,",
   "lleno de energía y me encanta saltar y",
   "jugar. Estoy esterilizado, desparasitado",
   "y con mis vacunas al día. He superado",
   "grandes dificultades y ahora solo quiero",
   "una oportunidad para ser feliz."
  ],
  "x": 35.147,
  "y": 28.126,
  "w": 30.23,
  "h": 45.078,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "chilindrina",
  "name": "Chilindrina",
  "sp": "perro",
  "label": "Perrita",
  "age": "2 años",
  "lines": [
   "Soy Chilindrina, una perrita de 2 años.",
   "Soy un poco tímida al principio, pero",
   "también muy activa y cariñosa. Estoy",
   "esterilizada, desparasitada y con mis",
   "vacunas al día. Sueño con una familia",
   "que me ayude a confiar nuevamente."
  ],
  "x": 38.694,
  "y": 28.673,
  "w": 36.921,
  "h": 44.595,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "sury",
  "name": "Sury",
  "sp": "perro",
  "label": "Perrita",
  "age": "4 años",
  "lines": [
   "Soy Sury, una perrita de 4 años. Soy",
   "tranquila, amable y muy cariñosa. Estoy",
   "esterilizada, desparasitada y con mis",
   "vacunas al día. Sobreviví a una terrible",
   "agresión y hoy sigo esperando conocer",
   "el amor de una familia."
  ],
  "x": 23.176,
  "y": 30.157,
  "w": 48.771,
  "h": 42.886,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "pipo",
  "name": "Pipo",
  "sp": "perro",
  "label": "Perrito",
  "age": "2 años",
  "lines": [
   "Soy Pipo, tengo 2 años. Soy amistoso,",
   "juguetón y lleno de energía. Estoy",
   "esterilizado, desparasitado y con",
   "mis vacunas al día. Me abandonaron",
   "siendo apenas un bebé y aún espero mi",
   "final feliz."
  ],
  "x": 34.784,
  "y": 29.158,
  "w": 33.253,
  "h": 44.111,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "rapunzel",
  "name": "Rapunzel",
  "sp": "perro",
  "label": "Perrita",
  "age": "3 años",
  "lines": [
   "Soy Rapunzel, una perrita de 3 años. Soy",
   "pequeña, juguetona y muy amigable.",
   "Estoy esterilizada, desparasitada y con",
   "mis vacunas al día. Fui rescatada de una",
   "situación muy difícil y ahora solo quiero",
   "sentirme segura y amada."
  ],
  "fs": 3.139,
  "x": 23.74,
  "y": 28.931,
  "w": 49.778,
  "h": 44.144,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "naricita",
  "name": "Naricita",
  "sp": "perro",
  "label": "Perrita",
  "age": "6 años",
  "lines": [
   "Soy Naricita, tengo 6 años. Soy tímida,",
   "dulce y amistosa. Estoy esterilizada,",
   "desparasitada y con mis vacunas al día.",
   "He superado mucho en mi vida y estoy",
   "lista para encontrar una familia que me",
   "quiera tal como soy."
  ],
  "x": 29.786,
  "y": 26.255,
  "w": 43.087,
  "h": 47.013,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "espumilla",
  "name": "Espumilla",
  "sp": "perro",
  "label": "Perrita",
  "age": "3 años",
  "lines": [
   "Soy Espumilla, una perrita de 3 años.",
   "Soy tranquila, amistosa y muy inteligente.",
   "Estoy esterilizada, desparasitada y con",
   "mis vacunas al día. Después de sobrevivir",
   "al maltrato, sigo esperando una familia",
   "que me dé el amor que merezco."
  ],
  "fs": 3.079,
  "x": 25.756,
  "y": 25.417,
  "w": 44.135,
  "h": 47.4,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "geovanny",
  "name": "Geovanny",
  "sp": "perro",
  "label": "Perrito",
  "age": "6 años",
  "lines": [
   "Soy Geovanny, tengo 6 años. Soy",
   "amigable, activo y siempre tengo ganas",
   "de compartir contigo. Estoy esterilizado,",
   "desparasitado y con mis vacunas al día. Fui",
   "rescatado en muy malas condiciones y hoy",
   "estoy listo para comenzar una nueva vida."
  ],
  "fs": 2.969,
  "x": 26.884,
  "y": 27.932,
  "w": 42.805,
  "h": 45.336,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "dientes",
  "name": "Dientes",
  "sp": "perro",
  "label": "Perrito",
  "age": "6 años",
  "lines": [
   "Soy Dientes, tengo 6 años. Soy activo,",
   "muy amoroso y siempre estoy dispuesto",
   "a regalar cariño. Estoy esterilizado,",
   "desparasitado y con mis vacunas al",
   "día. Lo pasé muy mal antes de ser",
   "rescatado, pero nunca perdí mi alegría."
  ],
  "fs": 3.179,
  "x": 32.608,
  "y": 26.546,
  "w": 33.132,
  "h": 46.723,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "nena",
  "name": "Nena",
  "sp": "perro",
  "label": "Perrita",
  "age": "4 años",
  "lines": [
   "Soy Nena, una perrita de 4 años. Soy",
   "amorosa, activa y disfruto mucho la",
   "compañía. Estoy esterilizada, desparasitada",
   "y con mis vacunas al día. Me abandonaron",
   "cuando era apenas una bebé y sigo",
   "esperando una familia para toda la vida."
  ],
  "fs": 2.939,
  "x": 19.75,
  "y": 30.383,
  "w": 49.133,
  "h": 42.886,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "taz",
  "name": "Taz",
  "sp": "perro",
  "label": "Perrita",
  "age": "5 años",
  "lines": [
   "Soy Taz, una perrita de 5 años. Soy",
   "pequeña, activa y muy amistosa. Estoy",
   "esterilizada, desparasitada y con mis",
   "vacunas al día. Sobreviví a un atropello",
   "y ahora sueño con un hogar donde me",
   "cuiden y me quieran."
  ],
  "x": 36.195,
  "y": 27.062,
  "w": 30.189,
  "h": 46.11,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "conny",
  "name": "Conny",
  "sp": "perro",
  "label": "Perrita",
  "age": "5 años",
  "lines": [
   "Soy Conny, una perrita de 5 años.",
   "Soy activa, amorosa y siempre tengo",
   "cariño para dar. Estoy esterilizada,",
   "desparasitada y con mis vacunas al día.",
   "Soy grande y mi corazón es aún más",
   "grande y espera una oportunidad."
  ],
  "x": 15.599,
  "y": 27.352,
  "w": 59.936,
  "h": 45.143,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "muu-chachina",
  "name": "Muu-Chachina",
  "sp": "perro",
  "label": "Perrita",
  "age": "6 años",
  "lines": [
   "Soy Muu-chachina, una perrita de 6 años.",
   "Soy amorosa, activa y disfruto mucho la",
   "compañía humana. Estoy esterilizada,",
   "desparasitada y con mis vacunas al día.",
   "He pasado momentos difíciles, pero nunca",
   "dejé de luchar por mis bebés y por mí."
  ],
  "fs": 3.019,
  "x": 31.802,
  "y": 28.996,
  "w": 41.032,
  "h": 44.273,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "mafalda",
  "name": "Mafalda",
  "sp": "perro",
  "label": "Perrita",
  "age": "2 años",
  "lines": [
   "Soy Mafalda, una perrita de 2 años. Soy muy",
   "activa, amistosa y me encanta compartir",
   "aventuras. Estoy esterilizada, desparasitada y",
   "con mis vacunas al día. Perdí a mi mejor amigo",
   "en la carretera y ahora espero encontrar una",
   "familia que nunca me abandone."
  ],
  "fs": 2.759,
  "x": 32.568,
  "y": 27.127,
  "w": 31.6,
  "h": 46.143,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "mariana",
  "name": "Mariana",
  "sp": "perro",
  "label": "Perrita",
  "age": "8 años",
  "lines": [
   "Soy Mariana, una perrita de 8 años.",
   "Soy tranquila, dulce y amistosa. Estoy",
   "esterilizada, desparasitada y con mis",
   "vacunas al día. Fui rescatada de una",
   "situación muy cruel y hoy solo quiero",
   "vivir rodeada de amor."
  ],
  "x": 35.953,
  "y": 26.513,
  "w": 35.107,
  "h": 46.755,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "chanel",
  "name": "Chanel",
  "sp": "perro",
  "label": "Perrita",
  "age": "6 años",
  "lines": [
   "Soy Chanel, una perrita de 6 años. Soy",
   "pequeña, amorosa y llena de energía.",
   "Estoy esterilizada, desparasitada y con",
   "mis vacunas al día. He sobrevivido al",
   "abandono y al maltrato, pero aún sigo",
   "creyendo en las personas."
  ],
  "x": 34.502,
  "y": 29.77,
  "w": 34.583,
  "h": 43.499,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "morgana",
  "name": "Morgana",
  "sp": "perro",
  "label": "Perrita",
  "age": "8 años",
  "lines": [
   "Soy Morgana, una perrita de 8 años. Soy",
   "tranquila, dócil y me encanta disfrutar la vida",
   "con calma. Estoy esterilizada, desparasitada",
   "y con mis vacunas al día. Sobreviví junto a",
   "mis bebés en una quebrada y ahora sueño",
   "con un hogar lleno de amor."
  ],
  "fs": 2.879,
  "x": 36.437,
  "y": 26.804,
  "w": 38.694,
  "h": 46.401,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "brunhildo",
  "name": "Brunhildo",
  "sp": "perro",
  "label": "Perrito",
  "age": "2 años",
  "lines": [
   "Soy Brunhildo, un perrito de 2 años. Soy tímido",
   "al principio, pero muy noble y amable cuando",
   "me conoces. Estoy esterilizado, desparasitado",
   "y con mis vacunas al día. Pasé mucho tiempo",
   "olvidado en una pequeña terraza, y hoy",
   "espero encontrar una familia que me dé la vida",
   "que siempre merecí."
  ],
  "fs": 2.749,
  "x": 37.686,
  "y": 24.578,
  "w": 25.272,
  "h": 46.626,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "gatael",
  "name": "Gatael",
  "sp": "gato",
  "label": "Gatito",
  "age": "4 meses",
  "lines": [
   "Soy Gatael, un gatito de 4 meses.",
   "Soy muy activo, curioso y me",
   "encanta explorar. Estoy esterilizado,",
   "desparasitado y con mis vacunas al día.",
   "Me abandonaron en una quebrada y",
   "hoy busco una familia para crecer feliz."
  ],
  "x": 30.351,
  "y": 25.901,
  "w": 42.967,
  "h": 46.143,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 },
 {
  "id": "gatalina",
  "name": "Gatalina",
  "sp": "gato",
  "label": "Gatita",
  "age": "4 meses",
  "lines": [
   "Soy GataLina, una gatita de 4 meses.",
   "Soy muy cariñosa, juguetona y llena de",
   "energía. Estoy esterilizada, desparasitada",
   "y con mis vacunas al día. Fui",
   "abandonada cuando era muy pequeña y",
   "sueño con una familia para siempre."
  ],
  "fs": 3.109,
  "x": 26.925,
  "y": 26.417,
  "w": 45.909,
  "h": 46.239,
  "health": {
   "esterilizado": true,
   "desparasitado": true,
   "vacunas": true
  }
 }
];
