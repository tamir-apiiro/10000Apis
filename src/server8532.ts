
const express = require('express')
import {handler8532} from "./handler8532";
const app = express()
app.get('/8532', handler8532)
app.listen(3000, () => {})
        