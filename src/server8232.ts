
const express = require('express')
import {handler8232} from "./handler8232";
const app = express()
app.get('/8232', handler8232)
app.listen(3000, () => {})
        