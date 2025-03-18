
const express = require('express')
import {handler8835} from "./handler8835";
const app = express()
app.get('/8835', handler8835)
app.listen(3000, () => {})
        