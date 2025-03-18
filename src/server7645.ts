
const express = require('express')
import {handler7645} from "./handler7645";
const app = express()
app.get('/7645', handler7645)
app.listen(3000, () => {})
        