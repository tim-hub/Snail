<template>
  <div>
    <brace style="height: 500px"
      :fontsize="'12px'"
      :theme="'monokai'"
      :mode="'javascript'"
      :codefolding="'markbegin'"
      :softwrap="'free'"
      :selectionstyle="'text'"
      :highlightline="true">
    </brace>
  </div>
</template>

<script>
import Brace from 'vue-bulma-brace'

export default {
  components: {
    Brace
  }
}
</script>
