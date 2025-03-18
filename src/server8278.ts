
const express = require('express')
import {handler8278} from "./handler8278";
const app = express()
app.get('/8278', handler8278)
app.listen(3000, () => {})
        