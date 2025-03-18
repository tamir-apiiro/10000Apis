
const express = require('express')
import {handler8681} from "./handler8681";
const app = express()
app.get('/8681', handler8681)
app.listen(3000, () => {})
        