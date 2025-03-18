
const express = require('express')
import {handler7142} from "./handler7142";
const app = express()
app.get('/7142', handler7142)
app.listen(3000, () => {})
        