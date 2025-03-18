
const express = require('express')
import {handler8205} from "./handler8205";
const app = express()
app.get('/8205', handler8205)
app.listen(3000, () => {})
        