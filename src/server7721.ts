
const express = require('express')
import {handler7721} from "./handler7721";
const app = express()
app.get('/7721', handler7721)
app.listen(3000, () => {})
        