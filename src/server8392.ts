
const express = require('express')
import {handler8392} from "./handler8392";
const app = express()
app.get('/8392', handler8392)
app.listen(3000, () => {})
        