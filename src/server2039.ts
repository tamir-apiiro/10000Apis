
const express = require('express')
import {handler2039} from "./handler2039";
const app = express()
app.get('/2039', handler2039)
app.listen(3000, () => {})
        