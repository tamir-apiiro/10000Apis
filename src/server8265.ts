
const express = require('express')
import {handler8265} from "./handler8265";
const app = express()
app.get('/8265', handler8265)
app.listen(3000, () => {})
        