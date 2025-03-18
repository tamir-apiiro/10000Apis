
const express = require('express')
import {handler8467} from "./handler8467";
const app = express()
app.get('/8467', handler8467)
app.listen(3000, () => {})
        