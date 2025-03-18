
const express = require('express')
import {handler8592} from "./handler8592";
const app = express()
app.get('/8592', handler8592)
app.listen(3000, () => {})
        