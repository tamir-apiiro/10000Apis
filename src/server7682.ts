
const express = require('express')
import {handler7682} from "./handler7682";
const app = express()
app.get('/7682', handler7682)
app.listen(3000, () => {})
        