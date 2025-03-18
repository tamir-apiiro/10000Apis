
const express = require('express')
import {handler8789} from "./handler8789";
const app = express()
app.get('/8789', handler8789)
app.listen(3000, () => {})
        