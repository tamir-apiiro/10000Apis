
const express = require('express')
import {handler8071} from "./handler8071";
const app = express()
app.get('/8071', handler8071)
app.listen(3000, () => {})
        