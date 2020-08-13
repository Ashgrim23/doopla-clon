<template>
  <div class="leyendaForbes">
    <p style="font-size: 1.2em;  font-weight: 900;">
      Doopla la primera Fintech, en su tipo, en entregar la solicitud de autorización para ser regulada.
      <v-dialog v-model="dialog">
        <template v-slot:activator="{on,attrs}">
          <a v-bind="attrs" v-on="on" class="forbSizeColor nota">Ver más...</a>
        </template>
        <DialogCard @close="dialog=false"/>
      </v-dialog>
    </p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
        }
    }
}
</script>


<style scoped>
.leyendaForbes {
  margin: 12.194px 0 12.194px 10px;
  color: rgb(255, 255, 255);  
}

.forbSizeColor {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(64, 249, 155);
  font-size: 15px;
  text-decoration: none;
}

.nota {
  float: right;
}

</style>