
const express = require('express')
import {handler7637} from "./handler7637";
const app = express()
app.get('/7637', handler7637)
app.listen(3000, () => {})
        