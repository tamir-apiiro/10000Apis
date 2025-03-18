
const express = require('express')
import {handler8247} from "./handler8247";
const app = express()
app.get('/8247', handler8247)
app.listen(3000, () => {})
        