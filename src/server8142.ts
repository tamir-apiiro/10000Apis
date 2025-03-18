
const express = require('express')
import {handler8142} from "./handler8142";
const app = express()
app.get('/8142', handler8142)
app.listen(3000, () => {})
        