
const express = require('express')
import {handler7658} from "./handler7658";
const app = express()
app.get('/7658', handler7658)
app.listen(3000, () => {})
        