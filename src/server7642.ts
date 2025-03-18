
const express = require('express')
import {handler7642} from "./handler7642";
const app = express()
app.get('/7642', handler7642)
app.listen(3000, () => {})
        