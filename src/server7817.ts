
const express = require('express')
import {handler7817} from "./handler7817";
const app = express()
app.get('/7817', handler7817)
app.listen(3000, () => {})
        