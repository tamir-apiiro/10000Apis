
const express = require('express')
import {handler766} from "./handler766";
const app = express()
app.get('/766', handler766)
app.listen(3000, () => {})
        