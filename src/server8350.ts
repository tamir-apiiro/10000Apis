
const express = require('express')
import {handler8350} from "./handler8350";
const app = express()
app.get('/8350', handler8350)
app.listen(3000, () => {})
        