
const express = require('express')
import {handler8738} from "./handler8738";
const app = express()
app.get('/8738', handler8738)
app.listen(3000, () => {})
        