
const express = require('express')
import {handler248} from "./handler248";
const app = express()
app.get('/248', handler248)
app.listen(3000, () => {})
        