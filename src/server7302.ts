
const express = require('express')
import {handler7302} from "./handler7302";
const app = express()
app.get('/7302', handler7302)
app.listen(3000, () => {})
        