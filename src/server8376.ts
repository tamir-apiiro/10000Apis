
const express = require('express')
import {handler8376} from "./handler8376";
const app = express()
app.get('/8376', handler8376)
app.listen(3000, () => {})
        