
const express = require('express')
import {handler8955} from "./handler8955";
const app = express()
app.get('/8955', handler8955)
app.listen(3000, () => {})
        