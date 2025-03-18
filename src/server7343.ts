
const express = require('express')
import {handler7343} from "./handler7343";
const app = express()
app.get('/7343', handler7343)
app.listen(3000, () => {})
        