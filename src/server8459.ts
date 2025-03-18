
const express = require('express')
import {handler8459} from "./handler8459";
const app = express()
app.get('/8459', handler8459)
app.listen(3000, () => {})
        