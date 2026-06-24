export interface Product {
  name: string;
  type: string;
  fiber?: string;
  colors?: string[];
  specs: { [key: string]: string };
  description: string;
  image: string;
  swatches?: { name: string; image: string }[];
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
    image: "/images/catalog_images/category_alfombras.jpg",
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
        description: "Diseñada para abrazar tus espacios con calidez y durabilidad. Su textura en bucle resiste el ir y venir de la vida familiar, vistiendo tu hogar con tonos sobrios que invitan a caminar descalzo.",
        image: "/images/catalog_images/prod_baron.jpg",
        swatches: [
          { name: "Beige", image: "/images/catalog_images/swatch_baron_beige.jpg" },
          { name: "Gris", image: "/images/catalog_images/swatch_baron_gris.jpg" },
          { name: "Visón", image: "/images/catalog_images/swatch_baron_vison.jpg" }
        ]
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
        description: "Nuestra opción más alegre y versátil. Con una paleta de colores vibrante y acogedora, Malibu se adapta al alma de cada habitación, brindando suavidad al tacto y confort acústico para los tuyos.",
        image: "/images/catalog_images/prod_malibu.jpg",
        swatches: [
          { name: "Beige", image: "/images/catalog_images/swatch_malibu_1.jpg" },
          { name: "Azul", image: "/images/catalog_images/swatch_malibu_2.jpg" },
          { name: "Gris", image: "/images/catalog_images/swatch_malibu_3.jpg" },
          { name: "Café", image: "/images/catalog_images/swatch_malibu_4.jpg" },
          { name: "Burdeo", image: "/images/catalog_images/swatch_malibu_5.jpg" },
          { name: "Gris Claro", image: "/images/catalog_images/swatch_malibu_6.jpg" }
        ]
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
        description: "Un refugio de paz para tu hogar. Dalton combina un diseño sutil y minimalista con una textura sumamente reconfortante, ideal para crear rincones de relajación en tonos naturales.",
        image: "/images/catalog_images/prod_dalton.jpg",
        swatches: [
          { name: "Gris Perla", image: "/images/catalog_images/swatch_dalton_1.jpg" },
          { name: "Beige", image: "/images/catalog_images/swatch_dalton_2.jpg" }
        ]
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
        description: "El equilibrio perfecto entre elegancia y practicidad diaria. Ofrece una pisada confortable y mullida a la vez que es sumamente fácil de limpiar, ideal para hogares activos y oficinas modernas.",
        image: "/images/catalog_images/prod_bali.jpg",
        swatches: [
          { name: "Visón", image: "/images/catalog_images/swatch_bali_1.jpg" },
          { name: "Beige", image: "/images/catalog_images/swatch_bali_2.jpg" }
        ]
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
        description: "Práctico, seguro y sumamente noble. Su base de goma antideslizante cuida tus pasos mientras viste de color de forma rápida cualquier habitación, evento o espacio de trabajo transitorio.",
        image: "/images/catalog_images/prod_cubrepiso.jpg",
        swatches: [
          { name: "Rojo", image: "/images/catalog_images/swatch_cubrepiso_1.jpg" },
          { name: "Verde", image: "/images/catalog_images/swatch_cubrepiso_2.jpg" },
          { name: "Café", image: "/images/catalog_images/swatch_cubrepiso_3.jpg" },
          { name: "Visón", image: "/images/catalog_images/swatch_cubrepiso_4.jpg" },
          { name: "Azul", image: "/images/catalog_images/swatch_cubrepiso_5.jpg" },
          { name: "Gris", image: "/images/catalog_images/swatch_cubrepiso_6.jpg" }
        ]
      }
    ]
  },
  {
    id: "flotantes",
    name: "Pisos Flotantes",
    description: "Pisos laminados flotantes de alta calidad con núcleos de fibra de madera de densidad media y alta (MDF/HDF). Diseños elegantes y alta durabilidad.",
    image: "/images/catalog_images/category_flotantes.jpg",
    products: [
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
        description: "La calidez clásica de la madera en su expresión más práctica. Su diseño natural y amaderado transforma las habitaciones en espacios acogedores, listos para albergar momentos familiares inolvidables.",
        image: "/images/catalog_images/prod_ecofloor.jpg",
        swatches: [
          { name: "Cerezo", image: "/images/catalog_images/flotante_page12_img6.png" },
          { name: "Olmo", image: "/images/catalog_images/flotante_page12_img7.png" },
          { name: "Tropical", image: "/images/catalog_images/flotante_page12_img8.png" },
          { name: "Madera Oscura", image: "/images/catalog_images/flotante_page12_img9.png" },
          { name: "Gris Perla", image: "/images/catalog_images/flotante_page13_img4.png" },
          { name: "Haya", image: "/images/catalog_images/flotante_page13_img5.png" }
        ]
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
        description: "Hecho para durar toda la vida y resistir las jornadas más activas de tu hogar o comercio. Con su núcleo ultra resistente de HDF y estándar AC4, soporta el tránsito pesado sin perder un ápice de su belleza natural.",
        image: "/images/catalog_images/prod_flotantepro.jpg",
        swatches: [
          { name: "Cerezo", image: "/images/catalog_images/flotante_page12_img6.png" },
          { name: "Olmo", image: "/images/catalog_images/flotante_page12_img7.png" },
          { name: "Tropical", image: "/images/catalog_images/flotante_page12_img8.png" },
          { name: "Madera Oscura", image: "/images/catalog_images/flotante_page12_img9.png" }
        ]
      }
    ]
  },
  {
    id: "spc",
    name: "Pisos SPC",
    description: "Revestimientos de compuesto de piedra plástica (Stone Plastic Composite), 100% impermeables y con manta de aislamiento incorporada (IXPE/EVA).",
    image: "/images/catalog_images/category_spc.jpg",
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
        description: "Robusto como la piedra pero con el tacto acogedor de la madera. Su composición impermeable te brinda total tranquilidad ante derrames en cocinas y baños, mientras su manta acústica integrada amortigua cada paso con suavidad.",
        image: "/images/catalog_images/prod_spc5mm.jpg",
        swatches: [
          { name: "Alamo Oak", image: "/images/catalog_images/spc_page7_img2.png" },
          { name: "Arena Oak", image: "/images/catalog_images/spc_page7_img3.png" },
          { name: "Ceniza Oak", image: "/images/catalog_images/spc_page7_img4.png" },
          { name: "Gris Oak", image: "/images/catalog_images/spc_page7_img5.png" },
          { name: "Castaño Oak", image: "/images/catalog_images/spc_page7_img6.png" }
        ]
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
        description: "Una alternativa moderna y liviana que no le teme al agua ni a los cambios de temperatura. Mantiene su forma perfecta en cualquier estación y su manta EVA incorporada asegura una pisada mullida y silenciosa.",
        image: "/images/catalog_images/prod_smartspc.png",
        swatches: [
          { name: "Ceniza Oak", image: "/images/catalog_images/spc_page7_img7.png" },
          { name: "Arena Oak", image: "/images/catalog_images/spc_page8_img3.png" },
          { name: "Cerezo Oak", image: "/images/catalog_images/spc_page8_img4.png" }
        ]
      }
    ]
  },
  {
    id: "vinilicos",
    name: "Pisos Vinílicos en Rollo",
    description: "Revestimientos vinílicos e impermeables en rollo de fácil limpieza e instalación. Disponibles en una gran gama de diseños y en variados espesores.",
    image: "/images/catalog_images/category_vinilicos.jpg",
    products: [
      {
        name: "Linóleo Vinílico en Rollo (0.9 mm y 1.3 mm)",
        type: "Piso Vinílico en Rollo",
        colors: ["JC008", "JC062", "JC003", "JC002", "98-5", "JC044", "JC004"],
        specs: {
          "Espesores Disponibles": "0.9 mm / 1.3 mm",
          "Ancho de Rollo": "2.00 metros",
          "Largo de Rollo": "25.00 metros",
          "Rendimiento de Rollo": "50.00 m²"
        },
        description: "Un aliado práctico e impermeable para el día a día. Se instala sin complicaciones y se limpia con una sola pasada, trayendo frescura y comodidad a tu cocina, baño o local comercial.",
        image: "/images/catalog_images/prod_linoleo09.jpg",
        swatches: [
          { name: "JC008", image: "/images/catalog_images/vinilico_page15_img2.png" },
          { name: "JC062", image: "/images/catalog_images/vinilico_page15_img3.png" },
          { name: "JC003", image: "/images/catalog_images/vinilico_page15_img5.png" },
          { name: "JC002", image: "/images/catalog_images/vinilico_page15_img6.png" },
          { name: "98-5", image: "/images/catalog_images/vinilico_page15_img7.png" },
          { name: "JC044", image: "/images/catalog_images/vinilico_page15_img8.png" }
        ]
      },
      {
        name: "Linóleo Vinílico en Rollo (1.5 mm)",
        type: "Piso Vinílico en Rollo",
        colors: ["JC062", "JC004"],
        specs: {
          "Espesor": "1.5 mm",
          "Ancho de Rollo": "2.00 metros",
          "Largo de Rollo": "20.00 metros",
          "Rendimiento de Rollo": "40.00 m²"
        },
        description: "Mayor espesor para consentir tus pies. Sus 1.5mm amortiguan tus pasos, aísla el frío del suelo y brinda un rincón más silencioso y duradero para toda la familia.",
        image: "/images/catalog_images/prod_linoleo15.jpg",
        swatches: [
          { name: "JC062", image: "/images/catalog_images/vinilico_page17_img3.png" },
          { name: "JC004", image: "/images/catalog_images/vinilico_page17_img4.png" }
        ]
      }
    ]
  },
  {
    id: "pasillos",
    name: "Pasillos de Alfombra",
    description: "Rollos de pasillo elegantes y de alta resistencia en fibras de Nylon y Poliéster. Perfectos para pasarelas, escaleras, pasillos y eventos.",
    image: "/images/catalog_images/category_pasillos.jpg",
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
        description: "Un camino de bienvenida sumamente resistente y acogedor. Fabricado en nylon duradero, este pasillo guía tus pasos con elegancia, manteniéndose impecable ante el desgaste diario.",
        image: "/images/catalog_images/prod_epos.png",
        swatches: [
          { name: "Terracota", image: "/images/catalog_images/swatch_epos_1.jpg" },
          { name: "Beige", image: "/images/catalog_images/swatch_epos_2.jpg" }
        ]
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
        description: "Viste tus corredores de calma y sobriedad. Su bucle de nylon en azul profundo es ideal para recepciones y pasillos comerciales que desean transmitir una primera impresión impecable y duradera.",
        image: "/images/catalog_images/prod_jena.jpg",
        swatches: [
          { name: "Azul", image: "/images/catalog_images/swatch_jena_1.jpg" }
        ]
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
        description: "La combinación ideal de distinción y resistencia bajo tus pies. Con una fibra premium de nylon, decora pasillos anchos y estándar con texturas agradables hechas para perdurar.",
        image: "/images/catalog_images/prod_madras.jpg",
        swatches: [
          { name: "Terracota (0.67m)", image: "/images/catalog_images/swatch_madras_1.jpg" },
          { name: "Rojo (0.67m)", image: "/images/catalog_images/swatch_madras_2.jpg" },
          { name: "Beige (0.67m)", image: "/images/catalog_images/swatch_madras_3.jpg" },
          { name: "Azul (0.67m)", image: "/images/catalog_images/swatch_madras_4.jpg" },
          { name: "Terracota (1.33m)", image: "/images/catalog_images/swatch_madras133_1.jpg" },
          { name: "Rojo (1.33m)", image: "/images/catalog_images/swatch_madras133_2.jpg" }
        ]
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
        description: "Pensado para la vida real y el movimiento continuo. Sus tonos jaspeados en gris y café disimulan el paso del día a día, ofreciendo una superficie texturada y duradera muy fácil de cuidar.",
        image: "/images/catalog_images/prod_sarah.jpg",
        swatches: [
          { name: "Gris Oscuro", image: "/images/catalog_images/swatch_sarah_1.jpg" },
          { name: "Café", image: "/images/catalog_images/swatch_sarah_2.jpg" }
        ]
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
        description: "Conéctate con texturas nativas y orgánicas. Sus patrones inspirados en la naturaleza visten tus pasillos con un toque rústico y sumamente cálido, ideal para crear ambientes con alma.",
        image: "/images/catalog_images/prod_tribu.jpg",
        swatches: [
          { name: "Café", image: "/images/catalog_images/swatch_tribu_1.jpg" },
          { name: "Gris Oscuro", image: "/images/catalog_images/swatch_tribu_2.jpg" },
          { name: "Terracota", image: "/images/catalog_images/swatch_tribu_3.jpg" }
        ]
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
        description: "Suave, ligero y lleno de vida. Este pasillo de 90 cm de ancho viste tus corredores con una pisada mullida de poliéster y colores cálidos que realzan la belleza de tu hogar.",
        image: "/images/catalog_images/prod_roma.png",
        swatches: [
          { name: "Café", image: "/images/catalog_images/swatch_roma_1.jpg" },
          { name: "Rojo", image: "/images/catalog_images/swatch_roma_2.jpg" },
          { name: "Gris", image: "/images/catalog_images/swatch_roma_3.png" }
        ]
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
        description: "Haz que cada invitado se siente especial. La alfombra roja por excelencia que corona matrimonios, galas y entradas memorables con distinción y prestancia.",
        image: "/images/catalog_images/prod_ceremonia.jpg",
        swatches: [
          { name: "Rojo", image: "/images/catalog_images/swatch_ceremonia_1.jpg" }
        ]
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
        description: "Una caricia mullida para tus pies en cada paso. Este pasillo destaca por su densidad extra suave, convirtiendo cualquier corredor en una alfombra de nubes de la que no querrás bajarte.",
        image: "/images/catalog_images/prod_lux.jpg",
        swatches: [
          { name: "Gris", image: "/images/catalog_images/swatch_lux_1.jpg" },
          { name: "Rojo", image: "/images/catalog_images/swatch_lux_2.png" },
          { name: "Café", image: "/images/catalog_images/swatch_lux_3.jpg" }
        ]
      }
    ]
  },
  {
    id: "pasto",
    name: "Pasto Sintético",
    description: "Pasto artificial decorativo para gardens, terrazas y zonas de juego. Soluciones de bajo mantenimiento y aspecto natural todo el año.",
    image: "/images/catalog_images/category_pasto.jpg",
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
        description: "Un toque verde que alegra tus balcones, terrazas y eventos. Económico, liviano y muy práctico, te permite disfrutar de un jardín eterno en cualquier rincón de tu casa sin preocuparte por el riego.",
        image: "/images/catalog_images/prod_pastodeco.jpg"
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
        description: "La frescura del pasto natural sin el trabajo de mantenerlo. Sus múltiples tonalidades verdes y su textura sumamente suave invitan a sentarse a jugar al aire libre todo el año.",
        image: "/images/catalog_images/prod_pastopro.jpg"
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
        description: "Formato listo para llevar a casa e instalar tú mismo. La solución más rápida para dar vida verde a tu balcón, rincón decorativo o vitrina comercial sin complicaciones.",
        image: "/images/catalog_images/prod_pastorollo.jpg"
      },
      {
        name: "Cinta de Unión para Pasto",
        type: "Accesorio de Instalación",
        specs: {
          "Ancho": "15 centímetros",
          "Largo": "10 metros",
          "Adhesión": "Cinta Autoadhesiva incorporada"
        },
        description: "El secreto detrás de un césped perfecto y sin uniones a la vista. Conecta cada rollo de pasto de manera firme, segura y duradera para un resultado profesional.",
        image: "/images/pasto-sintetico.png"
      }
    ]
  },
  {
    id: "espumas",
    name: "Espumas de Polietileno",
    description: "Espumas niveladoras y aislantes bajo piso flotante y espumas de embalaje. Excelente aislamiento térmico y protección industrial.",
    image: "/images/catalog_images/category_espumas.jpg",
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
        description: "Una capa silenciosa y protectora que cuida tu piso y tus pertenencias. Nivela las imperfecciones del suelo con suavidad y resguarda tus embalajes con una amortiguación inerte y segura.",
        image: "/images/catalog_images/prod_espumaestandar.jpg"
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
        description: "La barrera definitiva contra el frío y la humedad. Su lámina de aluminio reflectante mantiene la temperatura ideal en tu hogar, optimizando la calefacción y protegiendo tu piso flotante con suavidad.",
        image: "/images/catalog_images/prod_espumametalizada.jpg"
      }
    ]
  },
  {
    id: "otros",
    name: "Accesorios & Otros",
    description: "Cintas de terminación de alfombra, peldaños antideslizantes, limpiapies de entrada y manteles de hule en rollo.",
    image: "/images/catalog_images/category_accesorios.jpg",
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
        description: "El toque final y prolijo para tus alfombras. De colocación autoadhesiva sencilla, sella los bordes con firmeza evitando deshilachados y dándoles una terminación limpia y bonita.",
        image: "/images/catalog_images/prod_cintaorillado.jpg",
        swatches: [
          { name: "Azul", image: "/images/catalog_images/swatch_cinta_1.png" },
          { name: "Beige", image: "/images/catalog_images/swatch_cinta_2.png" },
          { name: "Burdeo", image: "/images/catalog_images/swatch_cinta_3.png" },
          { name: "Café", image: "/images/catalog_images/swatch_cinta_4.png" },
          { name: "Ocre", image: "/images/catalog_images/swatch_cinta_5.png" },
          { name: "Gris", image: "/images/catalog_images/swatch_cinta_6.png" }
        ]
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
        description: "Seguridad, calidez y silencio en cada escalón. Diseñados para vestir tus escaleras con suavidad al andar, previniendo resbalones y atenuando el ruido de las pisadas en el hogar.",
        image: "/images/catalog_images/prod_peldanos.jpg",
        swatches: [
          { name: "Rojo", image: "/images/catalog_images/swatch_peldanos_1.jpg" },
          { name: "Beige", image: "/images/catalog_images/swatch_peldanos_2.jpg" },
          { name: "Azul", image: "/images/catalog_images/swatch_peldanos_3.jpg" },
          { name: "Terracota", image: "/images/catalog_images/swatch_peldanos_4.jpg" }
        ]
      },
      {
        name: "Manteles de Hule en Rollo",
        type: "Menaje",
        specs: {
          "Ancho": "1.40 metros",
          "Largo de Rollo": "30.00 metros lineales",
          "Diseños Disponibles": "25 diseños (M1 a M25)"
        },
        description: "Protección alegre e impermeable para tu mesa diaria. Su limpieza es tan fácil como pasar un paño húmedo, listos para resistir los almuerzos familiares, manualidades y el ritmo del día a día.",
        image: "/images/catalog_images/prod_manteles.jpg",
        swatches: [
          { name: "M1", image: "/images/catalog_images/swatch_mantel_M1.jpg" },
          { name: "M2", image: "/images/catalog_images/swatch_mantel_M2.jpg" },
          { name: "M3", image: "/images/catalog_images/swatch_mantel_M3.jpg" },
          { name: "M4", image: "/images/catalog_images/swatch_mantel_M4.jpg" },
          { name: "M5", image: "/images/catalog_images/swatch_mantel_M5.jpg" },
          { name: "M6", image: "/images/catalog_images/swatch_mantel_M6.jpg" },
          { name: "M7", image: "/images/catalog_images/swatch_mantel_M7.jpg" },
          { name: "M8", image: "/images/catalog_images/swatch_mantel_M8.jpg" },
          { name: "M9", image: "/images/catalog_images/swatch_mantel_M9.jpg" },
          { name: "M10", image: "/images/catalog_images/swatch_mantel_M10.jpg" },
          { name: "M11", image: "/images/catalog_images/swatch_mantel_M11.jpg" },
          { name: "M12", image: "/images/catalog_images/swatch_mantel_M12.jpg" },
          { name: "M13", image: "/images/catalog_images/swatch_mantel_M13.jpg" },
          { name: "M14", image: "/images/catalog_images/swatch_mantel_M14.jpg" },
          { name: "M15", image: "/images/catalog_images/swatch_mantel_M15.jpg" },
          { name: "M16", image: "/images/catalog_images/swatch_mantel_M16.jpg" },
          { name: "M17", image: "/images/catalog_images/swatch_mantel_M17.jpg" },
          { name: "M18", image: "/images/catalog_images/swatch_mantel_M18.jpg" },
          { name: "M19", image: "/images/catalog_images/swatch_mantel_M19.jpg" },
          { name: "M20", image: "/images/catalog_images/swatch_mantel_M20.jpg" },
          { name: "M21", image: "/images/catalog_images/swatch_mantel_M21.jpg" },
          { name: "M22", image: "/images/catalog_images/swatch_mantel_M22.jpg" },
          { name: "M23", image: "/images/catalog_images/swatch_mantel_M23.jpg" }
        ]
      },
      {
        name: "Limpiapies de Entrada",
        type: "Accesorio de Limpieza",
        colors: ["Gris", "Café", "Rojo", "Welcome", "Lux", "Coco"],
        specs: {
          "Medida Estándar": "40 x 60 centímetros",
          "Tipos Disponibles": "Con Goma / Welcome / Lux / Coco"
        },
        description: "La primera bienvenida a tu hogar. Diseñados para resistir el roce diario y retener el polvo y la humedad, manteniendo el interior de tu casa limpio y acogedor.",
        image: "/images/catalog_images/prod_limpiapies.jpg",
        swatches: [
          { name: "Con Goma - Gris", image: "/images/catalog_images/swatch_limpiapies_gris.jpg" },
          { name: "Con Goma - Café", image: "/images/catalog_images/swatch_limpiapies_cafe.jpg" },
          { name: "Con Goma - Rojo", image: "/images/catalog_images/swatch_limpiapies_rojo.jpg" },
          { name: "Modelo Welcome", image: "/images/catalog_images/swatch_limpiapies_welcome.png" },
          { name: "Modelo Lux", image: "/images/catalog_images/swatch_limpiapies_lux.png" },
          { name: "Modelo Coco", image: "/images/catalog_images/swatch_limpiapies_coco.png" }
        ]
      }
    ]
  }
];
