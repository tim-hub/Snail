<template>
  <div>
    <AceEditor
      :fontSize="14"
      :showPrintMargin="true"
      :showGutter="true"
      :highlightActiveLine="true"
      mode="javascript"
      theme="monokai"
      :onChange="onChange"
      name="editor"
      :editorProps="{$blockScrolling: true}"
    />
    <SplitEditor
      mode="javascript"
      theme="monokai"
      :splits="2"
      orientation="beside"
      name="editor"
      :editorProps="{$blockScrolling: true}"
    />
  </div>
</template>

<script>
import { Ace as AceEditor, Split as SplitEditor } from 'vue2-brace-editor'
import 'brace/mode/javascript'
import 'brace/theme/monokai'

export default {
  components: {
    AceEditor,
    SplitEditor
  },
  methods: {
    onChange (newValue) {
      console.log('change', newValue)
    }
  }
}
</script>
