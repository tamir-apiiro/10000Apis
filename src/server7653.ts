
const express = require('express')
import {handler7653} from "./handler7653";
const app = express()
app.get('/7653', handler7653)
app.listen(3000, () => {})
        