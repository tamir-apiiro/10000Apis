
const express = require('express')
import {handler7710} from "./handler7710";
const app = express()
app.get('/7710', handler7710)
app.listen(3000, () => {})
        