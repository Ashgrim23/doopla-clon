<template>
  <div>
    <FooterLinks/>
    <v-img src="https://doopla-clone.s3.us-east-2.amazonaws.com/hr-purpl.png"/>
    <FooterNoticia/>
  </div>
</template>

<script>
import FooterLinks from "@/components/Landing/Footer/FooterLinks";
import FooterNoticia from "@/components/Landing/Footer/FooterNoticia";
export default {
  components: {
    FooterLinks,
    FooterNoticia
  }
};
</script>
