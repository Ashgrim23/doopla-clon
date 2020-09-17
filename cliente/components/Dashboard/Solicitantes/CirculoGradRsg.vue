<template>
    <svg :height="medida" :width="medida"  >
        <circle :cx="medida/2" :cy="medida/2" :r="medida/2" :fill="riesgoColor"  />
        <text x="50%" y="50%" text-anchor="middle" stroke="white" fill="white" :font-size="medida/2" dy=".3em">{{gradoRiesgo}}</text>
    </svg>  
</template>

<script>
export default {
    props:{
        medida:{type:Number,required:true},        
        gradoRiesgo:{type:String,required:true}
    },
    computed:{
        riesgoColor(){
            if (this.gradoRiesgo=='A1') return 'rgb(0,255,0)';
            if (this.gradoRiesgo=='A2') return 'rgb(0,210,0)';
            if (this.gradoRiesgo=='A3') return 'rgb(0,180,0)';
            if (this.gradoRiesgo=='A4') return 'rgb(0,150,0)';            
            if (this.gradoRiesgo=='B1') return 'rgb(141, 216, 55)';            
            if (this.gradoRiesgo=='B2') return 'rgb(115, 192, 27)';            
            if (this.gradoRiesgo=='B3') return 'rgb(93, 163, 12)';            
            if (this.gradoRiesgo=='B4') return 'rgb(71, 124, 10)';            
            if (this.gradoRiesgo=='C1') return 'rgb(216, 216, 0)';            
            if (this.gradoRiesgo=='C2') return 'rgb(194, 194, 0);';            
            if (this.gradoRiesgo=='C3') return 'rgb(155, 155, 0)';            
            if (this.gradoRiesgo=='C4') return 'rgb(119, 119, 0)';            
        }
    }
}
</script>
