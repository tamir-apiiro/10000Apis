
const express = require('express')
import {handler4297} from "./handler4297";
const app = express()
app.get('/4297', handler4297)
app.listen(3000, () => {})
        