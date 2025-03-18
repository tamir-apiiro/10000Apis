
const express = require('express')
import {handler8282} from "./handler8282";
const app = express()
app.get('/8282', handler8282)
app.listen(3000, () => {})
        