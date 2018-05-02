<template>
  <div>
  <editor
    style="height: 500px"
    :content= "content"
    :lang= "'javascript'"
    :options= "options"
    :theme="'github'"
    :height= "height"
    :width= "width"
    :sync= "sync"
   >
   </editor>
   <h1>A</h1>
  </div>
</template>
<script>
import {editor} from 'vue2-ace'
import 'brace/mode/javascript'
import 'brace/theme/chrome'
export default {
  components: {
    editor
  },
  data () {
    return {
      content: 'a=12;',
      lang: 'javascript',
      options: {
        fontSize: '12pt'
      },
      theme: 'chrome',
      height: '300px',
      width: '100%',
      sync: false
    }
  },
  mounted () {
    var vm = this
    vm.$on('editor-update', vm.function)
    editor.setOptions()
  }
}
</script>
