export default {
  global: {
    componenteFormativo:
      'Comunicación del riesgo según peligros y factores del ambiente, consumo y sanitarios',
    descripcionCurso:
      'En este componente formativo se ahondará en el tema de comunicación del riesgo el cual es fundamental dentro del proceso de análisis, inspección, vigilancia y control de los factores de riesgo del ambiente, consumo y sanitarios. Este proceso de comunicación permite abordar el riesgo para encontrar soluciones en conjunto que beneficien la calidad de vida de la población.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comunicación del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Objetivos de la comunicación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Caracterizar peligros y riesgos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Comunicación de información científica y las implicaciones',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Buenas prácticas en la comunicación del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Sistemas de información de salud en riesgo ambiental, del consumo y sanitarios',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Conceptos técnicos elaborados entre especialistas en comunicación y los técnicos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Modelo de vigilancia y control sanitario para los productos de uso y consumo humano',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Programación de muestreo y visitas a los establecimientos u organismos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Protocolos y guía para la recolección, conservación y transporte de muestras',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Protocolos en el control de zoonosis y vectores',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Tecnologías disponibles',
            hash: 't_2_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Comunicación del riesgo',
      referencia:
        'Plan American Healt Organizatión. (2020). Introducción a la comunicación de riesgos y participación comunitaria. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6CPh6rvIa1s',
    },
    {
      tema:
        '2.1. Sistemas de información de salud en riesgo ambiental, del consumo y sanitarios.',
      referencia:
        'Ministerio de Salud y Protección Social. (2020). Modelo Operativo de Inspección, Vigilancia y Control Sanitario para la Salud Ambiental.',
      tipo: 'Documento',
      link: 'https://www.minsalud.gov.co/RID/modelo-operativo-ivc-t.pdf',
    },
    {
      tema: '2.6. Protocolos en el control de zoonosis y vectores.',
      referencia:
        'Instituto Nacional de Salud y Ministerio de Salud y Protección Social. (2022). Protocolo de Vigilancia Integrada de la Rabia.',
      tipo: 'Documentos técnicos legales',
      link:
        'https://www.ins.gov.co/buscador-eventos/Lineamientos/Pro_Vigilancia%20Integrada%20Rabia.pdf',
    },
    {
      tema: '2.6. Protocolos en el control de zoonosis y vectores.',
      referencia:
        'Instituto Nacional de Salud. (2019). Protocolo Programa Evaluación Externa del Desempeño (EEDD).',
      tipo: 'Documentos técnicos legales',
      link:
        'https://www.ins.gov.co/TyS/programas-de-calidad/SiteAssets/Paginas/Entomolog%C3%ADa/Protocolo%20PEEDD%20Entomolgia%20Sep%202019.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acta de Inspección Sanitaria',
      significado:
        'Documento público que permite establecer de manera objetiva los resultados y condiciones sanitarias encontradas en el establecimiento visitado con respecto a las exigencias contenidas en la normatividad sanitaria vigente.',
    },
    {
      termino: 'Comunicación del riesgo',
      significado:
        'Principal herramienta para brindar a la población la información necesaria sobre un evento en salud, además promueve el conocimiento y la comprensión de los riesgos conocidos y desconocidos, a través de información sensibilizada y planificada para responder inquietudes y disminuir la ansiedad de la comunidad.',
    },
    {
      termino: 'Factores de riesgos',
      significado:
        'Aquellos atributos, variables o circunstancias inherentes o no a los individuos que están relacionados con los fenómenos de salud y que determinan en la población expuesta a ellos, una mayor o menor probabilidad de ocurrencia de un evento en salud (Decreto 3518 de 2006).',
    },
    {
      termino:
        'Organización para la Cooperación y el Desarrollo Económicos (OCDE)',
      significado:
        'Organización internacional cuya misión es diseñar mejores políticas que garanticen una mejor calidad de vida. Su objetivo es promover políticas que favorezcan la prosperidad, la igualdad, las oportunidades y el bienestar para todas las personas.',
    },
    {
      termino: 'Peligro',
      significado:
        'Conjunto de circunstancias que puedan conducir a daños desde una lesión, enfermedad o pérdida de la vida. (Organización Mundial de la Salud. 2006)',
    },
    {
      termino: 'Riesgo',
      significado:
        'Probabilidad de que se produzcan un evento determinado como consecuencia de la exposición a peligro determinado.',
    },
    {
      termino: 'Reglamento Sanitario Internacional (RSI)',
      significado:
        'Aprobado por la 58.ª Asamblea Mundial de la Salud en el 2005 por medio de la resolución WHA58.3,1 constituye el marco jurídico que, entre otros aspectos, define las capacidades nacionales básicas, incluso en los puntos de entrada, para el manejo de los eventos agudos de salud pública de importancia potencial o real a escala tanto nacional como internacional, así como los procedimientos administrativos conexos. El RSI (2005) tiene como propósito y alcance prevenir la propagación internacional de enfermedades, proteger contra esa propagación, controlarla y darle una respuesta de salud pública proporcionada y restringida a los riesgos para la salud pública, y evitando al mismo tiempo las interferencias innecesarias en el tráfico y el comercio internacional.',
    },
    {
      termino: 'Sistema de Información Ambiental de Colombia (SIAC)',
      significado:
        'Conjunto integrado de actores, políticas, procesos, y tecnologías involucradas en la gestión de información ambiental del país, para facilitar la generación de conocimiento, la toma de decisiones, la educación y la participación social para el desarrollo sostenible.',
    },
    {
      termino:
        'Sistema Integral de Información de la Protección Social (SISPRO)',
      significado:
        'Es una herramienta que permite obtener, procesar y consolidar la información necesaria para la toma de decisiones que apoyen la elaboración de políticas, el monitoreo regulatorio y la gestión de servicios en cada uno de los niveles y en los procesos esenciales del sector salud: aseguramiento, financiamiento, oferta, demanda y uso de servicios. Suministra información para toda la ciudadanía.',
    },
    {
      termino: 'Sistema de Vigilancia en Salud Pública (SIVIGILA)',
      significado:
        'Creado para realizar la provisión en forma sistemática y oportuna, de información sobre la dinámica de los eventos que afecten o puedan afectar la salud de la población colombiana, con el fin de: 1) orientar las políticas y la planificación en salud pública; 2) tomar las decisiones para la prevención y control de enfermedades y factores de riesgo en salud; 3) optimizar el seguimiento y evaluación de las intervenciones; 4) racionalizar y optimizar los recursos disponibles y lograr la efectividad de las acciones en esta materia, proponiendo por la protección de la salud individual y colectiva.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cisneros, José. (2002). El concepto de la comunicación: El cristal con que se mira. ÁMBITOS. Nº 7-8. 2º Semestre 2001 - 1er Semestre 2002 (pp. 49-82).',
      link:
        'https://idus.us.es/bitstream/handle/11441/67303/revista-comunicacion-ambitos-07-08_47-80.pdf?sequence=1',
    },
    {
      referencia:
        'Decreto 1575 de 2007. [Ministerio de la Protección Social]. Por el cual se establece el Sistema para la Protección y Control de la Calidad del Agua para Consumo Humano. 09 de mayo de 2007.',
      link:
        'https://www.ins.gov.co/TyS/Documents/Decreto%201575%20de%202007,MPS-MAVDT.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud, Ministerio de Salud y Protección Social. (2019). GUIA PARA LA VIGILANCIA POR LABORATORIO DEL VIRUS DE LA RABIA.',
      link:
        'https://www.ins.gov.co/buscador-eventos/Informacin%20de%20laboratorio/Gu%C3%ADa-Vigilancia-por-Laboratorio-Virus-de-la-Rabia.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud, Ministerio de Salud y Protección Social. (2020). Manual de procedimientos para la toma, conservación y envío de muestras al Laboratorio Nacional de Referencia.',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/Manual-toma-envio-muestras-ins.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud, Superintendencia de Servicios Públicos Domiciliarios. (2011). Manual de Instrucciones para la Toma, Preservación y Transporte de Muestras de Agua de Consumo Humano para Análisis de Laboratorio.',
      link:
        'https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2011%20Manual%20toma%20de%20muestras%20agua.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). (2015). Manual de Inspección, vigilancia y control sanitario de alimentos y bebidas basado en riesgo para las entidades territoriales de salud.',
      link:
        'https://www.invima.gov.co/documents/20143/1402493/29.+Manual+de+Toma+de+Muestras+de+Alimentos+y+Bebidas+para+LAS+ETS.pdf',
    },
    {
      referencia:
        'OCDE (2018). Informe sobre la comunicación pública: mensajes clave.',
      link:
        'https://www.oecd.org/gov/open-government/public-communications-report-highlights-es.pdf',
    },
    {
      referencia:
        'Organización Panamericana de la Salud, Ministerio de Protección Social, (2005). Sistema de información para la vigilancia de la salud pública: propuesta conceptual y tecnológica. Informe elaborado por los autores dentro de la consultoría contratada por la OPS.',
      link:
        'https://www.minsalud.gov.co/sites/rid/1/SISTEMA%20DE%20INFORMACI%C3%93N%20PARA%20LA%20VSP.pdf',
    },
    {
      referencia:
        'Resolución 1229 de 2013. [Ministerio de Salud y Protección Social]. . Por la cual se establece el modelo de inspección, vigilancia y control sanitario para los productos de uso y consumo humano. 23 de abril de 2013.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-1229-de-2013.pdf',
    },
    {
      referencia:
        'Resolución 1447 de 2018. [Ministerio de Ambiente y Desarrollo Sostenible]. Por la cual se reglamenta el sistema de monitoreo, reporte y verificación de las acciones de mitigación a nivel nacional de que se trata en el artículo 175 de la Ley 1753 de 2015, y se dictan otras disposiciones. 01 de agosto de 2018.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/01/15.-Resolucion-1447-de-2018.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luz Adriana Cárdenas González',
          cargo: 'Experta Temática',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de Estilo',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
