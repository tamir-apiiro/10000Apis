
const express = require('express')
import {handler906} from "./handler906";
const app = express()
app.get('/906', handler906)
app.listen(3000, () => {})
        