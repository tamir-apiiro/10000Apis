
const express = require('express')
import {handler8340} from "./handler8340";
const app = express()
app.get('/8340', handler8340)
app.listen(3000, () => {})
        