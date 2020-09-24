<template>
    <div style="display:flex;align-items:center;justify">
        <p style="font-size:14px;">{{parseFloat(this.percent).toFixed(2)}}% fondeado</p>
        <ul>
            <li><span  class="progSpan" :class="{'p10':(this.percent>=10)}"></span></li>
            <li><span class="progSpan" :class="{'p20':(this.percent>=20)}"></span></li>
            <li><span class="progSpan" :class="{'p30':(this.percent>=30)}"></span></li>
            <li><span class="progSpan" :class="{'p40':(this.percent>=40)}"></span></li>
            <li><span class="progSpan" :class="{'p50':(this.percent>=50)}"></span></li>
            <li><span class="progSpan" :class="{'p60':(this.percent>=60)}"></span></li>
            <li><span class="progSpan" :class="{'p70':(this.percent>=70)}"></span></li>
            <li><span class="progSpan" :class="{'p80':(this.percent>=80)}"></span></li>
            <li><span class="progSpan" :class="{'p90':(this.percent>=90)}"></span></li>
            <li><span class="progSpan" :class="{'p100':(this.percent>=100)}"></span></li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        percent:{type:Number,required:true}
    }
}
</script>

<style scoped>
ul{
    margin-left:10px;
    list-style: none;
    display: flex;
}

.progSpan.p10 {    
    background-image:linear-gradient(to right,rgb(238, 3, 3),rgb(165, 4, 58));
}

.progSpan.p20 {
    background-image:linear-gradient(to right,rgb(165, 4, 58),rgb(160, 0, 120));
}

.progSpan.p30 {
    background-image:linear-gradient(to right,rgb(160, 0, 120),rgb(92, 3, 114));
}

.progSpan.p40 {
    background-image:linear-gradient(to right,rgb(92, 3, 114),rgb(60, 3, 114));
}

.progSpan.p50 {
    background-image:linear-gradient(to right,rgb(60, 3, 114),rgb(17, 0, 95));
}

.progSpan.p60 {
    background-image:linear-gradient(to right,rgb(17, 0, 95),rgb(0, 95, 75));
}

.progSpan.p70 {
    background-image:linear-gradient(to right,rgb(0, 95, 75),rgb(0, 95, 48));
}
.progSpan.p80 {
    background-image:linear-gradient(to right,rgb(0, 95, 48),rgb(1, 167, 84));
}

.progSpan.p90 {
    background-image:linear-gradient(to right,rgb(1, 167, 84),rgb(1, 141, 1));
}

.progSpan.p100 {
    background-image:linear-gradient(to right,rgb(1, 141, 1),rgb(79, 214, 0));
}

.progSpan {
    display: block;
    width:60px;
    margin-left:5px;
    border-radius: 10px;
    height: 7px;
    background-color: rgb(232, 232, 232); 
}
</style>
