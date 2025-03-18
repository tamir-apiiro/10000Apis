
const express = require('express')
import {handler7490} from "./handler7490";
const app = express()
app.get('/7490', handler7490)
app.listen(3000, () => {})
        