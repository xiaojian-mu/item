<template>
<!-- 设置 -->
  <div id="app">
    
<Options/>
<PageSetupDialog/>
  </div>
</template>
<script>
import  Options from "../components/Options";
import  PageSetupDialog from "../components/PageSetupDialog";
export default {
  name: "Bathmos",
  data() {
    return {
    };
  },
  components: {
   Options,PageSetupDialog
  },
  methods: {
   
  },
};
</script>

<style scoped>
#app{
  background: #581135;
}

</style>