<template>
  <div class="codemirror">
    <codemirror v-model="code" :options="cmOption"></codemirror>
  </div>
</template>
<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/mode/php/php.js'
import 'codemirror/theme/cobalt.css'
import 'codemirror/addon/selection/active-line.js'
export default {
  components: {
    codemirror
  },
  data () {
    const code = `<?php
    $a = array('a' => 1, 'b' => 2, 3 => 'c');
    echo "$a[a] \${a[3] /* } comment */} {$a[b]} $a[a]";
    function hello($who) {
      return "Hello $who!";
    }
  ?><p>The program says <?= hello("World") ?>.</p>`
    return {
      code,
      cmOption: {
        tabSize: 4,
        width: '500px',
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: 'application/x-httpd-php',
        lineWrapping: true,
        theme: 'cobalt'
      }
    }
  }
}
</script>
