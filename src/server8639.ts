
const express = require('express')
import {handler8639} from "./handler8639";
const app = express()
app.get('/8639', handler8639)
app.listen(3000, () => {})
        