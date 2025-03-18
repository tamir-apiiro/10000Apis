
const express = require('express')
import {handler645} from "./handler645";
const app = express()
app.get('/645', handler645)
app.listen(3000, () => {})
        