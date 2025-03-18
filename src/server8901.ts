
const express = require('express')
import {handler8901} from "./handler8901";
const app = express()
app.get('/8901', handler8901)
app.listen(3000, () => {})
        