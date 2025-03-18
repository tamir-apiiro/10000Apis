
const express = require('express')
import {handler8541} from "./handler8541";
const app = express()
app.get('/8541', handler8541)
app.listen(3000, () => {})
        