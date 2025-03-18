
const express = require('express')
import {handler8537} from "./handler8537";
const app = express()
app.get('/8537', handler8537)
app.listen(3000, () => {})
        