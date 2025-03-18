
const express = require('express')
import {handler8385} from "./handler8385";
const app = express()
app.get('/8385', handler8385)
app.listen(3000, () => {})
        