
const express = require('express')
import {handler8574} from "./handler8574";
const app = express()
app.get('/8574', handler8574)
app.listen(3000, () => {})
        