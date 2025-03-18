
const express = require('express')
import {handler8948} from "./handler8948";
const app = express()
app.get('/8948', handler8948)
app.listen(3000, () => {})
        