
const express = require('express')
import {handler6541} from "./handler6541";
const app = express()
app.get('/6541', handler6541)
app.listen(3000, () => {})
        