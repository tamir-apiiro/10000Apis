
const express = require('express')
import {handler7714} from "./handler7714";
const app = express()
app.get('/7714', handler7714)
app.listen(3000, () => {})
        