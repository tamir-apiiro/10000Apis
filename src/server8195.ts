
const express = require('express')
import {handler8195} from "./handler8195";
const app = express()
app.get('/8195', handler8195)
app.listen(3000, () => {})
        