import React from "react"
import contactStyles from "./contact.module.scss"

export default ({ data }) => (
  <div>
    <iframe className={ contactStyles.iframe } id="typeform-full" width="100%" height="100%" frameborder="0" src="https://silvestarbistrovi.typeform.com/to/p8HdMq" title="Typeform"></iframe>
    <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>
  </div>
)
