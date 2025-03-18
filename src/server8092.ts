
const express = require('express')
import {handler8092} from "./handler8092";
const app = express()
app.get('/8092', handler8092)
app.listen(3000, () => {})
        