
const express = require('express')
import {handler8190} from "./handler8190";
const app = express()
app.get('/8190', handler8190)
app.listen(3000, () => {})
        