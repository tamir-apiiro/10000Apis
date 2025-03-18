
const express = require('express')
import {handler7242} from "./handler7242";
const app = express()
app.get('/7242', handler7242)
app.listen(3000, () => {})
        