<template>
    <svg  :height="medida" :width="medida" >
        <circle :cx="medida/2" :cy="medida/2" :r="medida/2" fill="white" />    
        <circle  class="pay" :cx="medida/2" :cy="medida/2" :r="medida/4" fill="transparent"
                stroke="rgb(64, 249, 155)"         
                :stroke-width="medida/2"               
                :transform="transformacion"                          
                :stroke-dasharray="circunferencia"/>      
    </svg> 
</template>

<script>
export default {
    props:{
        medida:{type:Number,required:true},        
        percent:{type:Number,required:true},
    },
    computed:{
        transformacion(){
            return "rotate(-90) translate(-"+this.medida+")"
        },
        circunferencia(){
            let factor=2*Math.PI*(this.medida/4) //formula circunferencia @_@
            let c= this.percent * factor / 100
            return c+" "+factor
        }
    }
}
</script>

<style scoped>
.pay {    
  animation: circle-chart-fill 1s reverse; /* 1 */ 
  transform: rotate(-90deg); /* 2, 3 */
  transform-origin: center;
}

@keyframes circle-chart-fill {
  to { stroke-dasharray: 0 100; }
}
</style>