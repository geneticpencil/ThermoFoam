export interface Product {
  name: string;
  type: string;
  fiber?: string;
  colors?: string[];
  specs: { [key: string]: string };
  description: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
}

export const catalogData: Category[] = [
  {
    id: "alfombras",
    name: "Alfombras Muro a Muro",
    description: "Confort, calidez y aislamiento térmico y acústico para oficinas y hogares. Variedad de colores y texturas de alta resistencia.",
    image: "/images/alfombra.png",
    products: [
      {
        name: "Baron",
        type: "Boucle",
        fiber: "100% Polipropileno BCF",
        colors: ["Beige", "Gris", "Visón", "Guinda"],
        specs: {
          "Ancho de Rollo": "4.00 metros",
          "Largo de Rollo": "30.00 metros",
          "Rendimiento de Rollo": "120.00 m²",
          "Tipo de Fibra": "100% Polipropileno BCF",
          "Tipo de Alfombra": "Boucle"
        },
        description: "Alfombra en bucle resistente, ideal para zonas residenciales de tráfico moderado a alto, con tonos sobrios y elegantes.",
        image: "/images/alfombra.png"
      },
      {
        name: "Malibu",
        type: "Boucle",
        fiber: "100% Polipropileno BCF",
        colors: ["Beige", "Azul", "Gris", "Café", "Burdeo", "Gris Claro", "Ocre"],
        specs: {
          "Ancho de Rollo": "4.00 metros",
          "Largo de Rollo": "40.00 metros",
          "Rendimiento de Rollo": "160.00 m²",
          "Tipo de Fibra": "100% Polipropileno BCF",
          "Tipo de Alfombra": "Boucle"
        },
        description: "Una de nuestras líneas más versátiles con una amplia paleta de colores para combinar con cualquier diseño interior.",
        image: "/images/alfombra.png"
      },
      {
        name: "Dalton",
        type: "Boucle",
        fiber: "100% Polipropileno BCF",
        colors: ["Gris Perla", "Beige", "Ocre"],
        specs: {
          "Ancho de Rollo": "4.00 metros",
          "Largo de Rollo": "30.00 metros",
          "Rendimiento de Rollo": "120.00 m²",
          "Tipo de Fibra": "100% Polipropileno BCF",
          "Tipo de Alfombra": "Boucle"
        },
        description: "Diseño elegante y textura suave. Aporta un ambiente cálido y minimalista con sus tonos naturales.",
        image: "/images/alfombra.png"
      },
      {
        name: "Bali",
        type: "Boucle",
        fiber: "100% Polipropileno BCF",
        colors: ["Visón", "Beige"],
        specs: {
          "Ancho de Rollo": "4.00 metros",
          "Largo de Rollo": "30.00 metros",
          "Rendimiento de Rollo": "120.00 m²",
          "Tipo de Fibra": "100% Polipropileno BCF",
          "Tipo de Alfombra": "Boucle"
        },
        description: "Alfombra boucle de alta calidad orientada a proyectos residenciales y oficinas, ofreciendo confort y facilidad de mantenimiento.",
        image: "/images/alfombra.png"
      },
      {
        name: "CubrePiso con Goma",
        type: "CubrePiso con base de Goma",
        fiber: "100% Polipropileno",
        colors: ["Rojo", "Verde", "Café", "Visón", "Azul", "Gris"],
        specs: {
          "Ancho de Rollo": "2.00 metros",
          "Largo de Rollo": "60.00 metros",
          "Rendimiento de Rollo": "120.00 m²",
          "Base": "Goma antideslizante",
          "Composición": "100% Polipropileno"
        },
        description: "Opción económica y funcional con base de goma antideslizante. Ideal para eventos, oficinas transitorias o habitaciones.",
        image: "/images/alfombra.png"
      }
    ]
  },
  {
    id: "pisos",
    name: "Pisos & Revestimientos",
    description: "Pisos vinílicos SPC impermeables, pisos flotantes de alto tráfico y linóleos en rollo. Soluciones prácticas y estéticas.",
    image: "/images/piso.png",
    products: [
      {
        name: "Piso Vinílico SPC 5mm",
        type: "Piso Vinílico SPC",
        colors: ["Alamo Oak", "Arena Oak", "Ceniza Oak", "Gris Oak", "Castaño Oak"],
        specs: {
          "Dimensiones de Tabla": "1220 mm x 180 mm",
          "Espesores": "4.0 mm + 1.0 mm IXPE (Aislante incorporado)",
          "Espesor Total": "5.0 mm",
          "Capa de Uso": "0.3 mm",
          "Tablas por Caja": "11 unidades",
          "Rendimiento por Caja": "2.42 m²",
          "Rendimiento Pallet": "157.30 m² (65 cajas)"
        },
        description: "Piso de compuesto de piedra plástica (SPC) de alta resistencia, 100% impermeable con manta de aislamiento acústico IXPE integrada.",
        image: "/images/piso.png"
      },
      {
        name: "Smart SPC 4.5mm",
        type: "Piso Vinílico SPC",
        colors: ["Ceniza Oak", "Arena Oak", "Cerezo Oak"],
        specs: {
          "Dimensiones de Tabla": "1220 mm x 183 mm",
          "Espesores": "3.5 mm + 1.0 mm EVA (Manta incorporada)",
          "Espesor Total": "4.5 mm",
          "Capa de Uso": "0.2 mm",
          "Tablas por Caja": "11 unidades",
          "Rendimiento por Caja": "2.46 m²",
          "Rendimiento Pallet": "159.90 m² (65 cajas)"
        },
        description: "Línea inteligente de SPC, más ligera pero con excelente estabilidad dimensional, resistencia al agua y manta EVA incorporada.",
        image: "/images/piso.png"
      },
      {
        name: "Piso Flotante EcoFloor (AC2)",
        type: "Piso Laminado Flotante",
        colors: ["Cerezo", "Olmo", "Tropical", "Madera Oscura", "Gris Perla", "Haya"],
        specs: {
          "Dimensiones de Tabla": "1218 mm x 199 mm",
          "Espesor": "8.0 mm",
          "Base / Núcleo": "MDF",
          "Clasificación de Tránsito": "AC2 / Clase 23 (Residencial general)",
          "Tablas por Caja": "10 unidades",
          "Rendimiento por Caja": "2.42 m²",
          "Rendimiento Pallet": "145.20 m² (60 cajas)"
        },
        description: "Piso flotante laminado clásico con núcleo de MDF, ideal para renovar habitaciones y salas con un aspecto amaderado natural y acogedor.",
        image: "/images/piso.png"
      },
      {
        name: "Piso Flotante Pro (AC4)",
        type: "Piso Laminado Flotante Pro",
        colors: ["Cerezo", "Olmo", "Tropical", "Madera Oscura"],
        specs: {
          "Dimensiones de Tabla": "1218 mm x 197 mm",
          "Espesor": "8.0 mm",
          "Base / Núcleo": "HDF (Alta Densidad)",
          "Clasificación de Tránsito": "AC4 / Clase 32 (Comercial general / Residencial intenso)",
          "Tablas por Caja": "10 unidades",
          "Rendimiento por Caja": "2.40 m²",
          "Rendimiento Pallet": "144.00 m² (60 cajas)"
        },
        description: "Piso laminado de alta densidad (HDF) diseñado para resistir un tráfico intenso. Cuenta con clasificación AC4 para máxima resistencia.",
        image: "/images/piso.png"
      },
      {
        name: "Linóleo Vinílico en Rollo",
        type: "Piso Vinílico en Rollo",
        colors: ["Diseño JC008", "Diseño JC062", "Diseño JC003", "Diseño JC002", "Diseño 98-5", "Diseño JC044", "Diseño JC004"],
        specs: {
          "Espesores Disponibles": "0.9 mm / 1.3 mm / 1.5 mm",
          "Ancho de Rollo": "2.00 metros",
          "Largo (0.9mm / 1.3mm)": "25.00 metros (Rollo de 50 m²)",
          "Largo (1.5mm)": "20.00 metros (Rollo de 40 m²)"
        },
        description: "Revestimiento vinílico en rollo, muy fácil de limpiar e instalar. Resistente al agua, ideal para cocinas, baños y comercios.",
        image: "/images/vinilico.png"
      }
    ]
  },
  {
    id: "pasillos",
    name: "Pasillos de Alfombra",
    description: "Rollos de pasillo elegantes y de alta resistencia en fibras de Nylon y Poliéster. Perfectos para pasarelas, escaleras, pasillos y eventos.",
    image: "/images/pasillos-alfombra.png",
    products: [
      {
        name: "Epos",
        type: "Pasillo Boucle",
        fiber: "100% Nylon",
        colors: ["Terracota", "Beige"],
        specs: {
          "Ancho": "0.67 metros",
          "Largo de Rollo": "30.00 metros lineales",
          "Tipo": "Boucle",
          "Fibra": "100% Nylon de alta durabilidad"
        },
        description: "Pasillo en bucle de Nylon con excelente resistencia al desgaste y facilidad de limpieza.",
        image: "/images/pasillos-alfombra.png"
      },
      {
        name: "Jena",
        type: "Pasillo Boucle",
        fiber: "100% Nylon",
        colors: ["Azul"],
        specs: {
          "Ancho": "0.67 metros",
          "Largo de Rollo": "30.00 metros lineales",
          "Tipo": "Boucle",
          "Fibra": "100% Nylon"
        },
        description: "Pasillo boucle de Nylon en color azul profundo, ideal para pasillos corporativos, hotelería y recepciones.",
        image: "/images/pasillos-alfombra.png"
      },
      {
        name: "Madras",
        type: "Pasillo Boucle",
        fiber: "100% Nylon",
        colors: ["Terracota", "Rojo", "Beige", "Azul"],
        specs: {
          "Anchos Disponibles": "0.67 metros / 1.33 metros",
          "Largo de Rollo": "30.00 metros lineales",
          "Tipo": "Boucle",
          "Fibra": "100% Nylon"
        },
        description: "Pasillo boucle de Nylon premium de alta resistencia, disponible en dos anchos para adaptarse a pasillos amplios o estándar.",
        image: "/images/pasillos-alfombra.png"
      },
      {
        name: "Sarah",
        type: "Pasillo Boucle",
        fiber: "100% Nylon",
        colors: ["Gris Oscuro", "Café"],
        specs: {
          "Ancho": "0.67 metros",
          "Largo de Rollo": "30.00 metros lineales",
          "Tipo": "Boucle",
          "Fibra": "100% Nylon"
        },
        description: "Pasillo boucle con tonos jaspeados en gris y café, excelente para disimular la suciedad en zonas de tráfico constante.",
        image: "/images/pasillos-alfombra.png"
      },
      {
        name: "Tribu",
        type: "Pasillo Boucle",
        fiber: "100% Nylon",
        colors: ["Café", "Gris Oscuro", "Terracota"],
        specs: {
          "Ancho": "0.67 metros",
          "Largo de Rollo": "30.00 metros lineales",
          "Tipo": "Boucle",
          "Fibra": "100% Nylon"
        },
        description: "Línea boucle con patrones y texturas nativas en fibra de Nylon, ideal para una decoración cálida y rústica.",
        image: "/images/pasillos-alfombra.png"
      },
      {
        name: "Roma",
        type: "Pasillo Boucle Poliéster",
        fiber: "100% Poliéster",
        colors: ["Café", "Rojo", "Gris"],
        specs: {
          "Ancho": "90 centímetros (0.90 metros)",
          "Largo de Rollo": "30.00 metros lineales",
          "Tipo": "Boucle",
          "Fibra": "100% Poliéster"
        },
        description: "Pasillo en bucle de Poliéster, con un ancho ideal de 90 cm. Aporta suavidad, ligereza y una gran variedad cromática.",
        image: "/images/pasillos-alfombra.png"
      },
      {
        name: "Ceremonia",
        type: "Pasillo de Gala / Eventos",
        fiber: "100% Poliéster",
        colors: ["Rojo"],
        specs: {
          "Anchos Disponibles": "0.67 metros / 1.33 metros",
          "Largo de Rollo": "30.00 metros lineales",
          "Tipo": "Boucle",
          "Fibra": "100% Poliéster"
        },
        description: "La alfombra roja clásica para eventos, ceremonias de gala, matrimonios y entradas protocolares.",
        image: "/images/pasillos-alfombra.png"
      },
      {
        name: "Lux",
        type: "Pasillo Confort Lux",
        fiber: "100% Poliéster",
        colors: ["Gris", "Rojo", "Café"],
        specs: {
          "Ancho": "0.66 metros",
          "Largo de Rollo": "30.00 metros lineales",
          "Tipo": "Lux (Tupido / Suave)",
          "Fibra": "100% Poliéster"
        },
        description: "Pasillo tupido y extra suave bajo la línea Lux. Proporciona una pisada mullida y confortable.",
        image: "/images/pasillos-alfombra.png"
      }
    ]
  },
  {
    id: "pasto",
    name: "Pasto Sintético",
    description: "Pasto artificial decorativo para jardines, terrazas y zonas de juego. Soluciones de bajo mantenimiento y aspecto natural todo el año.",
    image: "/images/pasto-sintetico.png",
    products: [
      {
        name: "Pasto Sintético Deco 7mm / 12mm",
        type: "Pasto Sintético Unicolor",
        specs: {
          "Espesores Disponibles": "7 mm / 12 mm",
          "Composición": "100% Polipropileno",
          "Base": "Backing de Látex resistente al agua",
          "Uso": "Decorativo (Interior / Exterior)",
          "Medida Rollo 7mm": "3.75 x 30 metros (113 m²)",
          "Medida Rollo 12mm": "2.00 x 32 metros (64 m²)"
        },
        description: "Pasto sintético unicolor de menor altura, económico y de fácil limpieza. Ideal para terrazas, balcones y eventos temporales.",
        image: "/images/pasto-sintetico.png"
      },
      {
        name: "Pasto Sintético Pro (20mm / 30mm / 40mm)",
        type: "Pasto Sintético Premium",
        specs: {
          "Espesores Disponibles": "20 mm / 30 mm / 40 mm",
          "Composición": "100% Polipropileno",
          "Tonalidad": "2 tonos de verde para aspecto natural",
          "Base": "Backing de Látex con drenaje",
          "Medida Rollo 20mm/30mm/40mm": "4.00 x 25 metros (100 m²) o 2.00 x 32 metros (64 m²)"
        },
        description: "Pasto artificial de aspecto muy realista gracias a sus dos tonos de verde. Resistente a rayos UV, suave al tacto e ideal para jardines y patios.",
        image: "/images/pasto-sintetico.png"
      },
      {
        name: "Pasto Sintético en Rollo Individual (Caja)",
        type: "Pasto Sintético Fraccionado",
        specs: {
          "Modelo 7mm": "1.00 mt ancho x 1.88 mt largo (Rollo de 1.88 m²)",
          "Modelo 20mm": "1.00 mt ancho x 4.00 mt largo (Rollo de 4.00 m²)",
          "Embalaje 7mm": "120 rollos por caja",
          "Embalaje 20mm": "42 rollos por caja"
        },
        description: "Formato fraccionado listo para llevar, perfecto para instalación rápida en pequeños proyectos de paisajismo, balcones o decoración comercial.",
        image: "/images/pasto-sintetico.png"
      },
      {
        name: "Cinta de Unión para Pasto",
        type: "Accesorio de Instalación",
        specs: {
          "Ancho": "15 centímetros",
          "Largo": "10 metros",
          "Adhesión": "Cinta Autoadhesiva incorporada"
        },
        description: "Accesorio indispensable para unir paños de pasto sintético de manera segura, invisible y duradera.",
        image: "/images/pasto-sintetico.png"
      }
    ]
  },
  {
    id: "espumas",
    name: "Espumas de Polietileno",
    description: "Espumas niveladoras y aislantes bajo piso flotante y espumas de embalaje. Excelente aislamiento térmico y protección industrial.",
    image: "/images/espuma.png",
    products: [
      {
        name: "Espuma de Polietileno Estándar",
        type: "Espuma Expandida Niveladora",
        specs: {
          "Espesores Disponibles": "2.0 mm / 3.0 mm",
          "Variaciones": "Estándar / Con Lámina de Polietileno (Barrera Humedad)",
          "Ancho de Rollo": "1.20 metros",
          "Formatos de Rollo": "10 m² / 100 m²",
          "Propiedades": "No daña la capa de ozono, biológicamente inerte, flexible, resistente a temperatura (-40°C a 70°C), baja absorción de agua"
        },
        description: "Manta niveladora y amortiguadora de espuma de polietileno expandido. Ideal como base bajo piso flotante y protección de embalajes.",
        image: "/images/espuma.png"
      },
      {
        name: "Espuma de Polietileno Metalizada",
        type: "Espuma Aislante Térmica Premium",
        specs: {
          "Espesor": "3.0 mm",
          "Recubrimiento": "Lámina Metalizada reflectiva",
          "Ancho de Rollo": "1.20 metros",
          "Formatos de Rollo": "10 m² / 100 m²",
          "Conductividad Térmica": "0.38 W/mK",
          "Densidad Media": "30 +/- 3 kg/m³",
          "Atenuación Acústica": "19 dB",
          "Absorción de Humedad": "1% en volumen"
        },
        description: "Base aislante reflectora de alto rendimiento. Ideal para calefacción por losa radiante o aislamiento térmico superior en techos y pisos flotantes.",
        image: "/images/espuma.png"
      }
    ]
  },
  {
    id: "otros",
    name: "Accesorios & Otros",
    description: "Cintas de terminación de alfombra, peldaños antideslizantes, limpiapies de entrada y manteles de hule en rollo.",
    image: "/images/vinilico.png",
    products: [
      {
        name: "Cinta de Orillado",
        type: "Accesorio de Alfombra",
        colors: ["Azul", "Beige", "Burdeo", "Café", "Ocre", "Gris"],
        specs: {
          "Ancho": "2.45 centímetros",
          "Largo": "76 centímetros",
          "Presentación": "12 cintas adhesivas por pack"
        },
        description: "Cinta autoadhesiva de terminación para orillar alfombras, evitando que se deshilachen y logrando un acabado profesional.",
        image: "/images/vinilico.png"
      },
      {
        name: "Peldaños de Alfombra",
        type: "Accesorio de Seguridad",
        fiber: "100% Nylon Boucle",
        colors: ["Rojo", "Beige", "Azul", "Terracota"],
        specs: {
          "Ancho": "62 centímetros",
          "Largo": "30 centímetros",
          "Cantidad por Pack": "15 unidades",
          "Tipo": "Boucle",
          "Fibra": "100% Nylon"
        },
        description: "Piezas de alfombra pre-cortadas en boucle de Nylon para instalar en escaleras. Aportan confort y evitan resbalones.",
        image: "/images/vinilico.png"
      },
      {
        name: "Manteles de Hule en Rollo",
        type: "Menaje",
        specs: {
          "Ancho": "1.40 metros",
          "Largo de Rollo": "30.00 metros lineales",
          "Diseños Disponibles": "25 diseños (M1 a M25)"
        },
        description: "Manteles impermeables y fáciles de limpiar, ideales para uso diario en hogares, restaurantes y eventos.",
        image: "/images/vinilico.png"
      },
      {
        name: "Limpiapies de Entrada",
        type: "Accesorio de Limpieza",
        colors: ["Gris", "Café", "Rojo"],
        specs: {
          "Medida Estándar": "40 x 60 centímetros",
          "Tipos Disponibles": "Con Goma / Welcome / Lux / Coco"
        },
        description: "Limpiapies resistentes y de gran durabilidad, ideales para retener la suciedad del calzado en la entrada del hogar o negocio.",
        image: "/images/vinilico.png"
      }
    ]
  }
];
