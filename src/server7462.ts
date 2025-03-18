
const express = require('express')
import {handler7462} from "./handler7462";
const app = express()
app.get('/7462', handler7462)
app.listen(3000, () => {})
        