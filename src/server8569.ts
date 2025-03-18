
const express = require('express')
import {handler8569} from "./handler8569";
const app = express()
app.get('/8569', handler8569)
app.listen(3000, () => {})
        