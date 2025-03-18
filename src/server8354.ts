
const express = require('express')
import {handler8354} from "./handler8354";
const app = express()
app.get('/8354', handler8354)
app.listen(3000, () => {})
        