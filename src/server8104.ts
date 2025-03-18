
const express = require('express')
import {handler8104} from "./handler8104";
const app = express()
app.get('/8104', handler8104)
app.listen(3000, () => {})
        