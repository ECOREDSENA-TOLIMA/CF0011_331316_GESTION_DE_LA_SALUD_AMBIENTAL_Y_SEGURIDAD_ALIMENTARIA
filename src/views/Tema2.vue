<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Buenas prácticas en la comunicación del riesgo

    .row.mb-5
      .col-md-4.mb-0
        figure
            img(src='@/assets/curso/temas/tema2/img-1.png', alt='')
      .col-md-8
        p La comunicación de riesgos utiliza variadas técnicas de comunicación, entre las cuales están los medios de comunicación social y medios de comunicación masivos, así como los grupos de interés y motivación comunitaria. Igualmente, requiere de la comprensión de las percepciones de las partes interesadas, de las sospechas y creencias, así como de sus conocimientos y prácticas.
        .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#EAF2E1")(data-aos="flip-up")
          .row.justify-content-center.align-items-center 
            .col-lg-3.mb-3
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/decorador-1.png', alt='Texto que describa la imagen')
            .col-lg-9
              p recuerde que la comunicación de riesgos efectiva debe ser capaz de identificar y poder manejar desde un inicio los rumores, así como la desinformación y otros desafíos de la comunicación.

    .row.align-items-center.mb-3
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Confianza y credibilidad

    p.mb-5 Estos principios son fundamentales en la comunicación del riesgo. Si no hay confianza, la población <strong>no va a creer</strong> en la información que ofrezcan las autoridades, o no acatan las recomendaciones. Existen algunas acciones que permiten mantener la confianza, se pueden identificar a continuación: 

    ImagenInfograficaB.color-acento-botones.mb-4.desktop
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/img-2-1.png', alt='Imagen decorativa')

      div(x="4%" y="13%" numero="+")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 No mentir
            p No hay que dar más tranquilidad de la necesaria. Para el caso de Covid-19, el gobierno se presentó en los medios de comunicación informando que todo irá bien cuando, de hecho, no se sabe si será así. En otras palabras, hay que evitar decir que todo irá bien, es necesario decir lo que sabe en ese momento y lo que el gobierno está haciendo al respecto. Es importante comunicar lo que realmente se puede y se debe hacer.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-3.png', alt='Imagen decorativa')

      div(x="4%" y="32%" numero="+")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 No minimizar la preocupación
            p No hay que minimizar la preocupación de la población, por la presencia de cualquier enfermedad. Hay que reconocer el temor de las personas. Las personas pueden estar atemorizadas, lo cual es una reacción saludable, no se debe insinuar a la población, no se preocupe.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-4.png', alt='Imagen decorativa')

      div(x="4%" y="50%" numero="+")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Reconocer la incertidumbre
            p Se debe tener en cuenta que las personas presentan muchas dudas, predicciones al futuro sin resolver, esto es entendible y lo que debe hacerse es dar respuestas precisas y no dar información a medias que permita a las personas generar inferencias sin argumentos. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-5.png', alt='Imagen decorativa')

      div(x="4%" y="69%" numero="+")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Explicar las acciones 
            p No se debe decir que el gobierno tiene la situación bajo control; en lugar de eso, se debe explicar a detalle y con la mayor sinceridad todas las acciones que se están desarrollando para manejar y dar solución a la situación. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-6.png', alt='Imagen decorativa')

      div(x="4%" y="86%" numero="+")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Ser empático 
            p La empatía, lo que en ocasiones se denomina “hablar con el corazón” (por ejemplo, no diga “sé cómo se siente”, sino: “es normal sentir ansiedad y esta es una situación preocupante para la comunidad y para todos nosotros…”).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-7.png', alt='Imagen decorativa')

      div(x="95%" y="13%" numero="+")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Ser el primero en dar la información 
            p Hay que dar la información a tiempo. Se debe informar a la población, por ejemplo, que existe un caso o un presunto caso de Covid-19 tan pronto como tenga conocimiento de ello. No espere a hacerlo público cuando ya se haya convertido en un rumor. El anuncio temprano, es muestra de liderazgo, ello genera confianza. Los anuncios tardíos dan lugar a especulaciones, lo que permite que las personas se pregunten hasta qué punto es realmente mala la situación

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-8.png', alt='Imagen decorativa')

      div(x="95%" y="32%" numero="+")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Reconocer las equivocaciones 
            p Si existe un error, corríjalo rápidamente. Eso muestra su lado humano y genera confianza porque no ha tratado de ocultar información.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-9.png', alt='Imagen decorativa')

      div(x="95%" y="50%" numero="+")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Evitar la estigmatización 
            p Hay que evitar la estigmatización. Es así, que para el ejemplo de Covid-19, muchas personas naturales de China o con rasgos/orígenes asiáticos están sufriendo discriminación de forma injustificada.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-10.png', alt='Imagen decorativa')
      
      div(x="95%" y="68%" numero="+")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Ser transparente 
            p Esto significa dar información clara, comprensible, sin adornos innecesarios que puedan generar duda. Ser transparente es hablar claro con nuestros interlocutores, expresar la verdad, siendo objetivos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-11.png', alt='Imagen decorativa')

      div(x="95%" y="86%" numero="+")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Involucrar la comunidad 
            p Es importante tener claro que la comunidad es la afectada con ciertos problemas de salud, es importante que siempre esté involucrada en los procesos y las decisiones que se lleven a cabo, no pueden generarse imposiciones, se debe consultar y trabajar en favor de su bienestar. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-12.png', alt='Imagen decorativa')

    .row.mt-5
      .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Infografía_acciones_para_mantener_la_confianza.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Descargar.</strong> Infografía acciones para mantener la confianza.

    .row.align-items-center.mb-3
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Difusión y comunicación

    p.mb-5 El coordinar la elaboración de los mensajes y realizar la difusión de forma oportuna y transparente de información científica entre las organizaciones que tengan relación con el tema ayudan a evitar confusiones que puedan socavar la confianza de las personas, aumentar el temor y la ansiedad, e impedir las medidas de respuesta.

    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#E6EBFB")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-lg-4.mb-3
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/decorador-2.svg', alt='Texto que describa la imagen')
        .col-lg-8
          p Ahora bien, para lograr contribuir de manera significativa con la gestión del conocimiento necesario para reducir las inequidades en salud, así como lograr tener un impacto importante en los resultados de salud dentro de la población y a través de grupos diferenciales de interés por parte del Plan Decenal de Salud Pública (PDSP), se requiere que muchos elementos de la agenda pública estén coordinados y no se limiten simplemente a las competencias para legislar, en cuestiones directamente relacionadas con garantizar, a través de una variedad de estrategias, políticas, programas e iniciativas, el mejoramiento de los servicios de salud; así como garantizar el aumento de la cobertura y disponibilidad de la tecnología en salud. La difusión y diseminación del PDSP debe darse a partir de evidencia y datos, y se debe apoyar y concentrar en las siguientes iniciativas y herramientas:

    .row.justify-content-center.align-items-center.mb-3
      .col-8(data-aos="fade-down-right")
        ImagenInfografica.color-acento-botones.mb-5.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img-13-1.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="30%" y="8.6%" numero="1")(style="background-color:#F1ECE6")
            p(style="color:#000 !important") Encuentros especializados en que se desarrollan estudios precisos sobre las diversas enfermedades, tratamientos y riesgos, el desarrollo de conocimiento y la toma de decisiones se va dando en la medida en la que se realiza un proceso de diálogo e interactividad entre los especialistas y los participantes.

          .tarjeta.color-acento-botones.p-3(x="74.5%" y="6%" numero="2")(style="background-color:#F1ECE6")
            p(style="color:#000 !important") Es importante promover y desarrollar cursos dirigidos para que los usuarios puedan empoderarse respecto al análisis social y económico en relación con el desarrollo de diversas enfermedades, se busca con la implementación de dichos cursos y un enfoque de equidad en salud.

          .tarjeta.color-acento-botones.p-3(x="43%" y="22.5%" numero="3")(style="background-color:#F1ECE6")
            p(style="color:#000 !important") Publicaciones de PolicyBriefs como mecanismo para difundir el aporte del uso de la información y la gestión del conocimiento en la orientación de las intervenciones efectivas en diversas regiones y territorios, en el marco del PDSP.
          
          .tarjeta.color-acento-botones.p-3(x="11.8%" y="51%" numero="4")(style="background-color:#F1ECE6")
            p(style="color:#000 !important") Noticias publicadas relacionadas con logros y progresos de las intervenciones y programas definidos en el marco de las dimensiones del PDSP.
          
          .tarjeta.color-acento-botones.p-3(x="77%" y="46.5%" numero="5")(style="background-color:#F1ECE6")
            p(style="color:#000 !important") Permiten acceder a resultados de indicadores para cada dimensión de forma periódica, para fomentar el acceso transparente y el libre uso del PDSP en el país. Estos servicios y herramientas adicionales, que aparentemente podrían limitarse a ser comunes estrategias de difusión y comunicación, han logrado demostrar ser exitosos en la implementación de políticas en salud con enfoque de equidad cada región.
          
          .tarjeta.color-acento-botones.p-3(x="55.3%" y="80%" numero="6")(style="background-color:#F1ECE6")
            p(style="color:#000 !important") La difusión apoyada en diferentes herramientas ha tenido alto impacto y han contribuido con el desarrollo de métodos y enfoques para mejorar la responsabilidad por la equidad en salud, incentivar los diálogos, foros y debates para promover el pensamiento crítico y el compromiso de aumentar la efectividad de los programas y planes que se enmarquen en el PDSP en el país.

        .row.justify-content-center.align-items-center.mt-5.mb-3
          .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema2/img-13-2.svg', alt='') 

    Separador 

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1. Sistemas de información de salud en riesgo ambiental, del consumo y sanitarios

    p.mb-5 En Colombia, desde hace más de 20 años se encuentran construyendo dos sistemas de gestión y regulación, los cuales corresponden al conjunto de orientaciones, normas, actividades, recursos, programas e instituciones que permiten la puesta en marcha de los principios y las políticas, para salud, como para el ambiente, y que son regidos por dos Ministerios, así:

    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#EAF2E1")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-lg-2.mb-3
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/decorador-3.png', alt='Texto que describa la imagen')
        .col-lg-10  
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              | El Sistema General de Seguridad Social en Salud (SGSSS), cuyo ente rector es el Ministerio de Salud y Protección Social (MSPS), y su Consejo Nacional de Seguridad Social en Salud (CNA).
            li 
              i.fas.fa-angle-right
              | El Sistema Nacional Ambiental (SINA), cuyo ente rector es el Ministerio de Ambiente y Desarrollo Sostenible (MADS), y su Consejo Nacional Ambiental (CNA) .
      
    .tarjeta.color-acento-contenido1.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/decorador-4.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Sistemas de Información utilizados por el sector salud y por el sector ambiente en Colombia. 
              p.text-small Para conocer algunos sistemas de Información utilizados por el sector salud y por el sector ambiente en Colombia, se debe revisar el siguiente documento:

            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(href="https://www.minsalud.gov.co/sites/rid/1/SISTEMA%20DE%20INFORMACI%C3%93N%20PARA%20LA%20VSP.pdf" target="_blank")
                span Descargar
                i.fas.fa-link

    Separador 

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2. Conceptos técnicos elaborados entre especialistas en comunicación y los técnicos

    p.mb-5 Por el desarrollo de las pandemias, el trabajo en equipo entre los especialistas en comunicación del riesgo y los técnicos se ha convertido en una gran necesidad, y tiene el fin de promover la meta de salud pública en cuanto a controlar rápidamente los brotes con el menor trastorno posible a la sociedad.

    .tarjeta.color-acento-contenido1.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/decorador-5.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Conceptos dados por especialistas de comunicación. 
              p.text-small En el siguiente documento se podrá identificar algunos conceptos dados por especialistas de comunicación.

            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(href="https://idus.us.es/bitstream/handle/11441/67303/revista-comunicacion-ambitos-07-08_47-80.pdf?sequence=1" target="_blank")
                span Descargar
                i.fas.fa-link

    p.mb-5 Como también, se presentan las siguientes <strong>estrategias de comunicación</strong> participativa para involucrar a miembros de la comunidad en el proceso de rastreo de contactos, pero ¿Por qué es fundamental que las comunidades participen en el rastreo de contactos?

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            | Se masifica el proceso de conocimiento e información.
          br 
          li 
            i.fas.fa-circle
            | Aumenta la receptividad y actitud colectiva. 
          br
          li 
            i.fas.fa-circle
            | Se construyen rutas de información que facilitan y agilizan la detección de un posible contacto.
          br
          li 
            i.fas.fa-circle
            | Se crea un sentido de corresponsabilidad frente al estado de salud de y el entorno. 
          br
          li 
            i.fas.fa-circle
            | Se fortalece el tejido social alrededor del cuidado comunitario.
          br
          li 
            i.fas.fa-circle
            | Se desarrolla un trabajo colectivo en la difusión y promoción de las piezas de comunicación para la apropiación, educación y participación comunitaria.
          br 
          li 
            i.fas.fa-circle
            | El posicionamiento de las piezas de difusión es mayor. Aumenta el compromiso de las comunidades como promotores de la salud. 
          br
          li 
            i.fas.fa-circle
            | Se incrementa el seguimiento a las medidas de bioseguridad por parte de la comunidad. 
          br
          li 
            i.fas.fa-circle
            | La participación de la comunidad y sus líderes ayudará a reconocer posibles problemas para efectuar el rastreo de contactos. 

    p.mb-5 La OCDE identificó algunos principios para promover una comunicación pública eficaz, estos son:  

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-12.desktop(data-aos="fade-right")
        figure
          img.mb-2(src='@/assets/curso/temas/tema2/img-15-1.svg', alt='La infografía resalta los principios esenciales para afrontar de manera efectiva los desafíos comunitarios a través de la comunicación. Se destaca la importancia de comprender las circunstancias locales y fomentar la confianza mediante la colaboración activa, así como el mantenimiento de una fuerza laboral comprometida y una comunicación bidireccional inclusiva. También se enfatiza la necesidad de escuchar y responder a los comentarios de manera oportuna, así como evitar la estigmatización y los rumores. Se sugiere el uso de tecnología para el rastreo de contactos y se enfatiza la importancia de coordinarse con todos los actores involucrados, utilizando un lenguaje que fomenta la empatía con la audiencia.')

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img-15-2.svg', alt='La infografía resalta los principios esenciales para afrontar de manera efectiva los desafíos comunitarios a través de la comunicación. Se destaca la importancia de comprender las circunstancias locales y fomentar la confianza mediante la colaboración activa, así como el mantenimiento de una fuerza laboral comprometida y una comunicación bidireccional inclusiva. También se enfatiza la necesidad de escuchar y responder a los comentarios de manera oportuna, así como evitar la estigmatización y los rumores. Se sugiere el uso de tecnología para el rastreo de contactos y se enfatiza la importancia de coordinarse con todos los actores involucrados, utilizando un lenguaje que fomenta la empatía con la audiencia.')

    Separador 

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3. Modelo de vigilancia y control sanitario para los productos de uso y consumo humano

    p.mb-5 Es necesario tener claridad en algunos conceptos y aspectos, los cuales hacen parte del referido modelo de vigilancia y control sanitarios, entre los que están: funciones esenciales de salud pública, objetos de inspección, fiscalización sanitaria, contenido general de las actas, concepto sobre los resultados obtenidos en las visitas.

    .row.align-items-center.mb-2
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Las Funciones Esenciales de Salud Pública (FESP)

    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#E6EBFB")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-lg-2.mb-3
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/decorador-3.png', alt='Texto que describa la imagen')
        .col-lg-10  
          p Corresponden al “conjunto imprescindible de medidas, bajo la responsabilidad exclusiva del estado, que resulta fundamentalmente para alcanzar la meta de la salud pública: de mejorar, promover, proteger y recuperar la salud de la población mediante una acción colectiva.” (OPS/OMS La Salud Pública en las Américas).

    p.mb-5 Las autoridades sanitarias del país, cuando realizan visita de inspección sanitaria a los establecimientos objeto de Inspección, Vigilancia y Control (IVC), en cumplimiento con la competencia dadas por la Ley 715 de 2001, están también cumpliendo con las Funciones Esenciales de Salud Pública (FES 2 y FES 6), como se presenta a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-12.desktop(data-aos="fade-right")
        figure
          img.mb-2(src='@/assets/curso/temas/tema2/img-16-1.svg', alt='La infografía destaca las funciones esenciales de salud pública, en particular, la importancia de la Vigilancia en Salud Pública como un proceso continuo de recolección, análisis e interpretación de datos relacionados con la salud. Se destaca las capacidades institucionales sólidas necesarias para abordar brotes de enfermedades transmisibles y no transmisibles, así como para atender aspectos de salud mental y lesiones. Incluye la vigilancia epidemiológica, el control de la producción y el consumo de bienes, así como la vigilancia ambiental de la salud. Además, se subraya la importancia de la vigilancia y el control sanitario para proteger la salud individual y colectiva.')

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img-16-2.svg', alt='La infografía destaca las funciones esenciales de salud pública, en particular, la importancia de la Vigilancia en Salud Pública como un proceso continuo de recolección, análisis e interpretación de datos relacionados con la salud. Se destaca las capacidades institucionales sólidas necesarias para abordar brotes de enfermedades transmisibles y no transmisibles, así como para atender aspectos de salud mental y lesiones. Incluye la vigilancia epidemiológica, el control de la producción y el consumo de bienes, así como la vigilancia ambiental de la salud. Además, se subraya la importancia de la vigilancia y el control sanitario para proteger la salud individual y colectiva.')

    .row.align-items-center.mb-2
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Los objetos de inspección

    p.mb-5 Como son originados de cadenas productivas, el gobierno nacional a través del Ministerio de Salud y Protección Social ha realizado la siguiente propuesta de categorías y número de subcategorías a los objetos de IVC, la cual se encuentra validada por las Entidades Territoriales de Salud, dicha propuesta se puede visualizar en la siguiente tabla: 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-8(data-aos="fade-right", alt="En la tabla uno se muestran las categorías de los objetos de inspección, vigilancia y control.")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 1.] <em>Categorías de los objetos de Inspección, Vigilancia y Control (IVC)</em>
        .tabla-a.color-acento-contenido
          table
            caption Nota.  MSPS. Jornada de capacitación ETS. (2022).
            thead
              tr
                th Categorías de los Objetos de IVC
                th Número de Subcategorías
            tbody.text-center
              tr
                td(style="background-color:#F6F6F6") Vivienda permanente
                td(style="background-color:#F6F6F6") 10 actividades económicas
              tr
                td Vivienda transitoria
                td 16 actividades económicas
              tr
                td(style="background-color:#F6F6F6") Educativos
                td(style="background-color:#F6F6F6") 18 actividades económicas
              tr
                td Cuartelarios
                td 1 actividad económica
              tr
                td(style="background-color:#F6F6F6") Carcelarios
                td(style="background-color:#F6F6F6") 4  actividades económicas
              tr
                td Espectáculo público
                td 12 actividades económicas
              tr
                td(style="background-color:#F6F6F6") Diversión pública
                td(style="background-color:#F6F6F6") 11 actividades económicas
              tr
                td Industriales
                td 147 actividades económicas
              tr
                td(style="background-color:#F6F6F6") Comerciales
                td(style="background-color:#F6F6F6") 65 actividades económicas
              tr
                td Hospitalarios y similares
                td 9 actividades económicas
              tr
                td(style="background-color:#F6F6F6") Terminales Portuarios Tráfico Nacional
                td(style="background-color:#F6F6F6") 17 actividades económicas
              tr
                td Puntos de entrada
                td 17 actividades económicas
              tr
                td(style="background-color:#F6F6F6") Acueducto
                td(style="background-color:#F6F6F6") 1 actividad económica

    p.mb-5 También se proponen los siguientes <strong>establecimientos objeto de IVC:</strong>

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            | Establecimientos donde se realice un proceso producto que incluya la elaboración de bienes o servicios que impliquen transformación y elaboración de materias primas donde se utilicen sustancias químicas.
          br 
          li 
            i.fas.fa-circle
            | Establecimientos que cuenten con marco normativo sanitario específico.
          br
          li 
            i.fas.fa-circle
            | Establecimientos donde exista alta concentración de población trabajadora, flotante o albergada de manera temporal o permanente diferente a las unidades habitacionales.
          br
          li 
            i.fas.fa-circle
            | Establecimientos que son objeto de seguimiento por parte de los organismos de control.
          br
          li 
            i.fas.fa-circle
            | Establecimientos que de acuerdo a su actividad comercial de bienes y servicios reporta eventos de interés en salud pública.
          br
          li 
            i.fas.fa-circle
            | Establecimientos cuya actividad económica de bienes y servicios exista una alta presencia de factores de riesgo físico, químico y biológico de acuerdo a la evaluación realizada por las autoridades sanitarias producto de los diagnósticos de IVC.
  
    p.mb-5 Así como los subprocesos de inspección, vigilancia y control: 

    .row.justify-content-center.align-items-center.mb-2
      .col-12.col-md-10.col-lg-8(data-aos="fade-right", alt="En la tabla 2 se muestran los subprocesos de inspección, vigilancia y control.")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 2.] #[i Subprocesos de Inspección, Vigilancia y Control- IVC] 
      .col-12.col-md-10.col-lg-8(data-aos="fade-right")
        .tabla-b.color-acento-contenido.mb-5
          table(style="min-width:auto")
            caption Nota. SENA (2022). 
            thead
              tr.cabecera-a.text-center(style="background-color:#F9BCAB") 
                th Procesos
                th(colspan="2") Subproceso de inspección, vigilancia y control 
            tbody
              tr(style="background-color:#F6F6F6")
                th.text-center.cabecera-b Inspección
                td 
                  ul.lista-ul--color
                    li 
                      i.fas.fa-circle
                      | Preparación
                    br 
                    li 
                      i.fas.fa-circle
                      | Inspección <em>in situ</em>
                    br
                    li 
                      i.fas.fa-circle
                      | Evaluación y Emisión de concepto

              tr(style="background-color:#FFFF")
                th.text-center.cabecera-b Vigilancia
                td 
                  ul.lista-ul--color
                    li 
                      i.fas.fa-circle
                      | Recolección, Acopio y procesamiento de datos
                    br 
                    li 
                      i.fas.fa-circle
                      | Análisis, interpretación y difusión de información
                    br
                    li 
                      i.fas.fa-circle
                      | Definición y recomendación de medidas sanitarias y de seguridad

              tr(style="background-color:#F6F6F6")
                th.text-center.cabecera-b Control 
                td 
                  ul.lista-ul--color
                    li 
                      i.fas.fa-circle
                      | Ordenar mecanismos de tipo cautelar o correctivos
                    br 
                    li 
                      i.fas.fa-circle
                      | Velar por la implementación de medidas sanitarias, su cumplimiento y evaluación del efecto y la adopción de nuevas medidas.
                    br
                    li 
                      i.fas.fa-circle
                      | Sancionar.

    p.mb-5 Sobre la <strong>Fiscalización Sanitaria,</strong> que es uno de los macro procesos misionales centrales, comprendido por los subprocesos: inspección, vigilancia y control de riesgos sanitarios.  Sus objetivos están en verificar el cumplimiento de las normas sanitarias, así como en identificar los factores de riesgos y potenciales efectos de los procesos productivos sobre la salud humana. 

    .row.align-items-center.mb-2
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Contenido general del acta

    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#E6EBFB")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-lg-2.mb-3
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/decorador-7.png', alt='Texto que describa la imagen')
        .col-lg-10  
          p Las actas generalmente cuentan con bloques de información relacionados con las condiciones sanitarias y ambientales, para ser diligenciados y evaluados según la información obtenida del establecimiento. Las condiciones sanitarias y ambientales evaluadas varían según la complejidad y el marco normativo especifico.
    
    .row.align-items-center.mb-2
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Concepto sobre los resultados obtenidos en las visitas

    p.mb-5 Para empezar, se debe aclarar que los conceptos sanitarios son el resultado obtenido de la evaluación de las condiciones sanitarias y ambientales con base en las visitas de inspección sanitaria y el análisis de los criterios y normas, existen diferentes tipos de conceptos que se obtienen durante este proceso, al revisar el siguiente material se puede conocerlos:

    TabsA.color-acento-botones.mb-5
      .tarjeta(style="background-color:#EAF2E1").p-4(titulo="Concepto favorable")
        p Se emite cuando el objeto de Inspección, Vigilancia y Control (IVC) sanitario, obtiene porcentaje de cumplimiento entre el 95 y 100 % y su funcionamiento u operación no genera riesgos sanitarios a la salud pública. Finalizada la visita se insta al representante a continuar con el mantenimiento de las condiciones sanitarias y a cumplir con la normatividad vigente a través de procesos de autorregulación, autogestión y buenas prácticas sanitarias.

      .tarjeta(style="background-color:#EAF2E1").p-4(titulo="Concepto favorable con requerimiento")
        p Se emite cuando, el objeto de IVC no cumple totalmente con los requisitos y condiciones sanitarias, pero no representa o constituye un riesgo inminente para la salud pública o la seguridad sanitaria. La calificación del acta se encuentra entre el 50 % al 94 % del cumplimiento. Finalmente, la autoridad sanitaria realizará los requerimientos y exigencias a que haya lugar.

      .tarjeta(style="background-color:#EAF2E1; max-width:100%").p-4(titulo="Concepto desfavorable")
        p Se emite cuando en el objeto de IVC: 
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | No cumple con los requisitos y condiciones sanitarias establecidas en el marco normativo sanitario obteniendo una calificación menor o igual a 49 % y constituye un riesgo inminente para la salud pública.
          li 
            i.lista-ul__vineta
            | En caso de que uno o más de los aspectos a evaluar, tanto los aspectos preestablecidos en las actas o como los identificados por el inspector, sea calificado como “crítico”, independiente del porcentaje de cumplimiento obtenido, el concepto sanitario a emitir será de desfavorable.
          li 
            i.lista-ul__vineta
            | Exista un incumplimiento reiterado en la tercera visita de seguimiento por la emisión de un concepto sanitario favorable con requerimientos. 

    p.mb-5 Para que la autoridad sanitaria pueda emitir el respectivo concepto, todas las actividades deben quedar registradas en formatos estandarizados que faciliten la trazabilidad, seguimiento y análisis de riesgo relacionado con el objeto de IVC (Resolución 1229 de 2013, artículo 28).

    Separador 

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4. Programación de muestreo y visitas a los establecimientos u organismos

    p.mb-5 Existen algunas fases importantes que siguen las autoridades sanitarias para elaborar la programación de muestreo y visitas. Observe a continuación las fases necesarias dentro del proceso de muestreo de alimentos y bebidas: 

    .row.justify-content-center.align-items-center.mt-5
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-primario.p-4.col-ipad2
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img-17.png' alt='AvatarTop')
          p <strong>¿Sabe cómo se realiza el proceso de muestreo de alimentos y bebidas?</strong>
          p Lo primero que se debe hacer es determinar los insumos para la toma de muestra y hacer el alistamiento.

        .tarjeta.color-primario.p-4.col-ipad2
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img-18.png' alt='AvatarTop')
          p Se coordina con el laboratorio la capacidad operativa teniendo en cuenta la normatividad sanitaria vigente y los lineamientos del INVIMA. Se elabora y firma un acta con los acuerdos que debe entregarse al coordinador de Salud Ambiental.

        .tarjeta.color-primario.p-4.col-ipad2
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img-19.png' alt='AvatarTop')
          p Se elabora el programa de muestreo priorizando el enfoque de riesgos y los lineamientos del INVIMA. Se define el tipo de alimentos a muestrear, los municipios y los establecimientos donde se realizará el muestreo.
        
        .tarjeta.color-primario.p-4.col-ipad2
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img-20.png' alt='AvatarTop')
          p Se programa la toma de muestra estableciendo ubicación, fecha y se asigna el personal que realizará la toma de muestra. Dicho profesional deberá trasladarse hasta el establecimiento e informar al propietario sobre el muestreo.

        .tarjeta.color-primario.p-4.col-ipad2
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img-21.png' alt='AvatarTop')
          p Proceda a tomar la muestra de acuerdo a lo establecido en el Manual de Toma de muestras de alimentos y bebidas para entidades territoriales de salud emitido por el INVIMA. 

        .tarjeta.color-primario.p-4.col-ipad2
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img-22.png' alt='AvatarTop')
          p Diligencie el acta y verifique la disponibilidad de insumos entre los que se encuentran: gel antibacterial, nevera color rojo, pilas refrigerantes, guantes desechables, bata blanca, gorro, tapabocas, marcador espátula, termómetro de punzón.
        
        .tarjeta.color-primario.p-4.col-ipad2
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img-23.png' alt='AvatarTop')
          p Es fundamental que los entes encargados hagan seguimiento mensual del avance del plan para hacer los correctivos necesarios. Finalmente, es importante realizar entrenamiento constante al personal para evitar errores durante el proceso. 
  
    p.mb-5 Por otro lado, seguidamente podrá conocer las etapas necesarias para realizar el muestreo del agua para el consumo humano:  

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Paso 1")
        .col-md-6.mb-4.mb-md-0
          p ¿Sabía que el agua que consume diariamente ha pasado por un proceso de inspección y verificación?
          p Lo primero que se debe hacer es determinar el número de muestras a recoger: con base en lo dispuesto en la Resolución 2115 de 2007. Posteriormente, se identifica la capacidad operativa del laboratorio teniendo en cuenta la normatividad y los lineamientos establecidos.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-24.png', alt='Imagen decorativa')

      .row(titulo="Paso 2")
        .col-md-6.mb-4.mb-md-0
          p Es importante recordar la elaboración del acta de la reunión, y firmarla por el personal implicado. Se programan los puntos de muestreo a monitorear durante la vigencia. Se elabora la programación mensual para la toma de muestras en los puntos, esta programación es notificada al Laboratorio de Salud Pública y a las personas prestadoras del servicio de acueducto de cada municipio.
        
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-25.png', alt='Imagen decorativa')

      .row(titulo="Paso 3")
        .col-md-6.mb-4.mb-md-0
          p El técnico debe dirigirse al laboratorio de Salud Pública, y solicitar frascos de acuerdo al número de muestras programadas. Algunos Insumos requeridos son: mechero con alcohol al (96 %), atomizador con alcohol antiséptico al (70 %), algodón estéril, encendedor, toallas desechables, gel antibacterial, bolsas, recipientes de vidrio y de plástico, medidor de cloro y PH, nevera azul, bata blanca, gorro y guantes.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-26.png', alt='Imagen decorativa')

      .row(titulo="Paso 4")
        .col-md-6.mb-4.mb-md-0
          p La persona designada debe trasladarse hasta el municipio, dirigirse al acueducto y solicitar acompañamiento, luego dirigirse a los puntos de muestreo y realizar la toma según el manual establecido. Durante la toma se diligencia el acta la cual debe ser firmada por las partes. Finalmente, la persona encargada debe hacer seguimiento mensual del proceso y realizar las correcciones necesarias.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-27.png', alt='Imagen decorativa')
     
    Separador 

    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5. Protocolos y guía para la recolección, conservación y transporte de muestras

    p.mb-5 A continuación, se relacionan las guías y manual que orientan la recolección, conservación y transporte de muestras para: zoonosis, alimentos y bebidas, vectores y agua para consumo humano.

    .tarjeta.color-acento-contenido1.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/decorador-8.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Guía para la vigilancia por Laboratorio del virus de la rabia. 
              p.text-small El siguiente documento corresponde a la guía para la vigilancia por Laboratorio del virus de la rabia (INS, 2019).

            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(href="https://www.ins.gov.co/buscador-eventos/Informacin%20de%20laboratorio/Gu%C3%ADa-Vigilancia-por-Laboratorio-Virus-de-la-Rabia.pdf" target="_blank")
                span Descargar
                i.fas.fa-link
    
    .row.align-items-center.mb-2
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Alimentos y bebidas 

    .tarjeta.color-acento-contenido1.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/decorador-9.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Manual de toma de muestras de alimentos y bebidas para entidades territoriales de salud. 
              p.text-small El siguiente  documento se denomina: “Manual de toma de muestras de alimentos y bebidas para entidades territoriales de salud” (INVIMA, 2015)

            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(href="https://www.invima.gov.co/" target="_blank")
                span Descargar
                i.fas.fa-link
    
    .row.align-items-center.mb-2
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Agua de consumo humano
    
    .tarjeta.color-acento-contenido1.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/decorador-10.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Manual de Instrucciones para la Toma, Preservación y Transporte de Muestras de Agua de Consumo Humano para Análisis de Laboratorio.
              p.text-small También se tiene en cuenta el documento denominado: “Manual de Instrucciones para la Toma, Preservación y Transporte de Muestras de Agua de Consumo Humano para Análisis de Laboratorio”. (INS, 2011). Se puede revisar a continuación:

            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(href="https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2011%20Manual%20toma%20de%20muestras%20agua.pdf" target="_blank")
                span Descargar
                i.fas.fa-link
    
    .row.align-items-center.mb-2
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Vectores

    .tarjeta.color-acento-contenido1.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/decorador-11.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Manual de procedimientos para la toma, conservación y envío de muestras al Laboratorio Nacional de Referencia
              p.text-small Finalmente, es importante consultar el documento denominado: “Manual de procedimientos para la toma, conservación y envío de muestras al Laboratorio Nacional de Referencia” (INS, MSPS, 2020): 

            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(href="https://www.ins.gov.co/BibliotecaDigital/Manual-toma-envio-muestras-ins.pdf" target="_blank")
                span Descargar
                i.fas.fa-link

    Separador 
    
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.6. Protocolos en el control de zoonosis y vectores

    p El Protocolo de Vigilancia en Salud Pública es la guía técnica y operativa que estandariza los criterios, procedimientos y actividades que permiten sistematizar las actividades de vigilancia de los eventos de interés en Salud Pública (Artículo 3, Decreto 3518 de 2006).
    p.mb-5 En tal sentido, se tienen establecidos los siguientes protocolos para zoonosis y vectores

    .tarjeta.tarjeta.p-5.mb-5.mt-5.col-lg-5.mx-auto(style="background-color:#E6EBFB")
      .row
        .contenedor
          .row            
            .col-6.mb-3
              a.boton.color-acento-botones.indicador__container.mx-lg-5.mx-md-5(@click="modal2 = true")
                span Zoonosis: Rabia
                i.fas.fa-search
                .indicador--click(v-if="mostrarIndicador")
          
              ModalA(:abrir-modal.sync="modal2")
                .row.align-items-center
                  .tarjeta.fagc.p-4.p-md-5.mb-5(style="background: linear-gradient(0deg,#FCE7E1, #FEF8F6)")
                    .row.justify-content-around.align-items-center
                      .col-8.col-sm-6.col-md-3.mb-4.mb-md-0
                        img(src="@/assets/curso/temas/tema1/img-17.svg")
                      .col-md.col-lg-6
                        .titulo-segundo.color-acento-contenido
                            h3 Zoonosis: Rabia
                        p.mb-4 Protocolo Programa de Evaluación Externa del Desempeño (EEDD), 4 de abril de 2019. Se puede descargar en el siguiente enlace:
                        a.boton.color-acento-botones(href="https://www.ins.gov.co/buscador-eventos/Lineamientos/Pro_Vigilancia%20Integrada%20Rabia.pdf" target="_blank" type="application/pdf")
                          span Enlace web
                          i.fas.fa-file-code
                      
            .col-6.mb-3
              a.boton.color-acento-botones.indicador__container.mx-lg-5.mx-md-5(@click="modal3 = true")
                span Vectores: Entomología
                i.fas.fa-search
                .indicador--click(v-if="mostrarIndicador")
          
              ModalA(:abrir-modal.sync="modal3")
                .row.align-items-center
                  .tarjeta.fagc.p-4.p-md-5.mb-5(style="background: linear-gradient(0deg,#FCE7E1, #FEF8F6)")
                    .row.justify-content-around.align-items-center
                      .col-8.col-sm-6.col-md-3.mb-4.mb-md-0
                        img(src="@/assets/curso/temas/tema1/img-18.svg")
                      .col-md.col-lg-6
                        .titulo-segundo.color-acento-contenido
                          h3 Vectores: Entomología
                        p.mb-4 Protocolo Programa de Evaluación Externa del Desempeño (EEDD), 4 de abril de 2019. Se puede descargar en el siguiente enlace:
                        a.boton.color-acento-botones(href="https://www.ins.gov.co/TyS/programas-de-calidad/SiteAssets/Paginas/Entomolog%C3%ADa/Protocolo%20PEEDD%20Entomolgia%20Sep%202019.pdf" target="_blank" type="application/pdf")
                          span Enlace web
                          i.fas.fa-file-code

    Separador 

    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.7. Tecnologías disponibles

    p Las Tecnologías de la Información y las Comunicaciones (TIC), “son el conjunto de recursos, herramientas, equipos, programas informáticos, aplicaciones, redes y medios; que permiten la compilación, procesamiento, almacenamiento, transmisión de información como: voz, datos, texto, video e imágenes.” (Ley 1341 de 2009, Artículo 6).
    p.mb-5 Algunas de las herramientas TIC que se usan dentro del proceso de comunicación son:

    TabsB.color-acento-botones
      .py-4.py-md-5(titulo="Redes telefónicas" :icono="require('@/assets/curso/temas/tema2/img-35.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-30.png', alt='Imagen decorativa')

          .col-md-6
            h4 Redes telefónicas
            p <strong>Telefonía fija:</strong> es el método menos utilizado y el más básico para realizar una conexión a internet, se utiliza un módem en un acceso telefónico básico.
            p <strong>Banda ancha:</strong> método superior a la telefonía fija, ya que es más veloz.
            p <strong>Telefonía móvil:</strong> es el método más utilizado, son más fáciles y más baratas de desplegar, permite una velocidad igual con referencia a la banda ancha. Este método es el que más sufre alteraciones y mejora.

      .py-4.py-md-5(titulo="Redes de televisión" :icono="require('@/assets/curso/temas/tema2/img-36.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-31.png', alt='Imagen decorativa')

          .col-md-6
            h4 Redes de televisión
            p <strong>La televisión terrestre:</strong> que es el método más tradicional de transmitir la señal de difusión de televisión, en forma de ondas de radio transmitida por el espacio abierto.
            p <strong>La televisión por satélite:</strong> consistente en retransmitir desde un satélite de comunicaciones, una señal de televisión emitida desde un punto de la Tierra, de forma que ésta pueda llegar a otras partes del planeta.
            p <strong>La televisión por cable:</strong> en la que se transmiten señales de radiofrecuencia a través de fibras ópticas o cables coaxiales.
            p <strong>La televisión por Internet:</strong> traduce los contenidos en un formato que puede ser transportado por redes IP, por eso también es conocida como televisión IP.

      .py-4.py-md-5(titulo="Redes en el hogar" :icono="require('@/assets/curso/temas/tema2/img-37.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-32.png', alt='Imagen decorativa')

          .col-md-6
            h4 Redes en el hogar
            p Estas redes se pueden implementar por medio de cables y también sin ellos, la segunda forma es mucho más común por la mayor comodidad para el usuario porque actualmente muchos dispositivos vienen preparados con este tipo de conectividad.

      .py-4.py-md-5(titulo="Los terminales" :icono="require('@/assets/curso/temas/tema2/img-38.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-33.png', alt='Imagen decorativa')

          .col-md-6
            h4 Los terminales
            p Actúan como punto de acceso de los ciudadanos a la sociedad de la información y por eso son de suma importancia y son uno de los elementos que siguen en evolución, entre estos están:
            p <strong>Ordenador personal:</strong> computador para uso personal, puede ser con cableado o inalámbrico.
            p <strong>Navegador de internet:</strong> la mayoría de los ordenadores se encuentran conectados a la red. Existen diferentes navegadores como Google, Chrome, Mozilla Firefox entre otros.
            p <strong>Reproductores portátiles de audio y video:</strong> a partir del 2005, el mercado de los reproductores portátiles se encuentra en un proceso de renovación hacia aquellos dispositivos que son capaces de reproducir MP3 y MP4. Las otras formas de audio, como los dispositivos analógicos (radios), y dispositivos digitales (lectores de CD en todos los formatos), se encuentran en retroceso.

      .py-4.py-md-5(titulo="Los servicios" :icono="require('@/assets/curso/temas/tema2/img-39.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-34.png', alt='Imagen decorativa')

          .col-md-6
            h4 Los servicios
            p El correo electrónico, los buscadores, banca online, acceso a contenidos informativos y de ocio y el acceso a la administración pública, audio y música reproductor de audio portátil, TV y cine alta definición, la TDT, videojuegos, video jugador, entre otros.











</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
