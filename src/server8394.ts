
const express = require('express')
import {handler8394} from "./handler8394";
const app = express()
app.get('/8394', handler8394)
app.listen(3000, () => {})
        