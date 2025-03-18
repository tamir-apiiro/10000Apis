
const express = require('express')
import {handler8597} from "./handler8597";
const app = express()
app.get('/8597', handler8597)
app.listen(3000, () => {})
        