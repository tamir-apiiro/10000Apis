
const express = require('express')
import {handler7144} from "./handler7144";
const app = express()
app.get('/7144', handler7144)
app.listen(3000, () => {})
        