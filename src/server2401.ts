
const express = require('express')
import {handler2401} from "./handler2401";
const app = express()
app.get('/2401', handler2401)
app.listen(3000, () => {})
        