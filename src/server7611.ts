
const express = require('express')
import {handler7611} from "./handler7611";
const app = express()
app.get('/7611', handler7611)
app.listen(3000, () => {})
        