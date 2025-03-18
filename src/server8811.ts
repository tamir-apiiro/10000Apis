
const express = require('express')
import {handler8811} from "./handler8811";
const app = express()
app.get('/8811', handler8811)
app.listen(3000, () => {})
        