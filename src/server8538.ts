
const express = require('express')
import {handler8538} from "./handler8538";
const app = express()
app.get('/8538', handler8538)
app.listen(3000, () => {})
        