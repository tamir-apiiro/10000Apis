
const express = require('express')
import {handler7431} from "./handler7431";
const app = express()
app.get('/7431', handler7431)
app.listen(3000, () => {})
        