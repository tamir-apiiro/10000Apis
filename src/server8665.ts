
const express = require('express')
import {handler8665} from "./handler8665";
const app = express()
app.get('/8665', handler8665)
app.listen(3000, () => {})
        