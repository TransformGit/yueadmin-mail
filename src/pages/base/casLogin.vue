<template>
	<form id="casForm" action="/pay/base/casProxy.do" style="display: none">
    <input type="text" name="rawUrl" :value="rawUrl">
  </form>
</template>
<script>
export default {
	data () {
    return {
      rawUrl: '',
    }
  },
  mounted () {
  	this.rawUrl = '#'+this.$fromPath;
  	// console.log(this.rawUrl)
    setTimeout(() => {
  	  document.getElementById('casForm').submit()
    }, 500)
  }
}
</script>