
const express = require('express')
import {handler7265} from "./handler7265";
const app = express()
app.get('/7265', handler7265)
app.listen(3000, () => {})
        