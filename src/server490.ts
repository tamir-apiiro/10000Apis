
const express = require('express')
import {handler490} from "./handler490";
const app = express()
app.get('/490', handler490)
app.listen(3000, () => {})
        