
const express = require('express')
import {handler677} from "./handler677";
const app = express()
app.get('/677', handler677)
app.listen(3000, () => {})
        