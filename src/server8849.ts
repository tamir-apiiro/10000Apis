
const express = require('express')
import {handler8849} from "./handler8849";
const app = express()
app.get('/8849', handler8849)
app.listen(3000, () => {})
        