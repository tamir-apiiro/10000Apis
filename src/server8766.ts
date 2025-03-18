
const express = require('express')
import {handler8766} from "./handler8766";
const app = express()
app.get('/8766', handler8766)
app.listen(3000, () => {})
        