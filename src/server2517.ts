
const express = require('express')
import {handler2517} from "./handler2517";
const app = express()
app.get('/2517', handler2517)
app.listen(3000, () => {})
        