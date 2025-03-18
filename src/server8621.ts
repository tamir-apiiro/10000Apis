
const express = require('express')
import {handler8621} from "./handler8621";
const app = express()
app.get('/8621', handler8621)
app.listen(3000, () => {})
        