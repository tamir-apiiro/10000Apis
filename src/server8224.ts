
const express = require('express')
import {handler8224} from "./handler8224";
const app = express()
app.get('/8224', handler8224)
app.listen(3000, () => {})
        