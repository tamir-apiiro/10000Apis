
const express = require('express')
import {handler7025} from "./handler7025";
const app = express()
app.get('/7025', handler7025)
app.listen(3000, () => {})
        