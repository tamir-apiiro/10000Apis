
const express = require('express')
import {handler8315} from "./handler8315";
const app = express()
app.get('/8315', handler8315)
app.listen(3000, () => {})
        