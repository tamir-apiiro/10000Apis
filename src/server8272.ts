
const express = require('express')
import {handler8272} from "./handler8272";
const app = express()
app.get('/8272', handler8272)
app.listen(3000, () => {})
        