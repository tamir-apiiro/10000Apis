
const express = require('express')
import {handler8144} from "./handler8144";
const app = express()
app.get('/8144', handler8144)
app.listen(3000, () => {})
        