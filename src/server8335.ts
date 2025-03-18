
const express = require('express')
import {handler8335} from "./handler8335";
const app = express()
app.get('/8335', handler8335)
app.listen(3000, () => {})
        