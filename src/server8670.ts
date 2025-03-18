
const express = require('express')
import {handler8670} from "./handler8670";
const app = express()
app.get('/8670', handler8670)
app.listen(3000, () => {})
        