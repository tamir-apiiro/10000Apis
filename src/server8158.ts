
const express = require('express')
import {handler8158} from "./handler8158";
const app = express()
app.get('/8158', handler8158)
app.listen(3000, () => {})
        