<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p La comunicación del riesgo es un factor esencial para la protección de la comunidad frente a la presencia de cualquier tipo de enfermedad, por ende, resulta fundamental conocer su definición, características, entes encargados, normatividad y los protocolos para su manejo.
    p En este orden de ideas, el objetivo de este componente formativo es identificar los principales elementos de la comunicación del riesgo como uno de factor fundamental para garantizar la salud y la integralidad del ser humano, se revisarán aspectos esenciales frente a este tema los cuales son necesarios para la estabilidad social, económica y política de cara a emergencias.
    p.mb-5 Una breve revisión de los temas vistos, se encuentran en el siguiente esquema 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente comunicación del riesgo aborda de manera integral la necesidad de comprender los peligros y riesgos asociados con el ambiente, el consumo y la sanidad, y la importancia de comunicar esta información de manera clara y efectiva.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
