
const express = require('express')
import {handler142} from "./handler142";
const app = express()
app.get('/142', handler142)
app.listen(3000, () => {})
        