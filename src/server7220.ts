
const express = require('express')
import {handler7220} from "./handler7220";
const app = express()
app.get('/7220', handler7220)
app.listen(3000, () => {})
        