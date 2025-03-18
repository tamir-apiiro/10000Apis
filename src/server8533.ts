
const express = require('express')
import {handler8533} from "./handler8533";
const app = express()
app.get('/8533', handler8533)
app.listen(3000, () => {})
        