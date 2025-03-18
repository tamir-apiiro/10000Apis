
const express = require('express')
import {handler8861} from "./handler8861";
const app = express()
app.get('/8861', handler8861)
app.listen(3000, () => {})
        