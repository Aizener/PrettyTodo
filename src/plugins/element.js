import Vue from 'vue'
import { Button, Card, Checkbox, Input, Message } from 'element-ui'

Vue
  .use(Button)
  .use(Card)
  .use(Checkbox)
  .use(Input)

Vue.prototype.$message = Message
