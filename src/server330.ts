
const express = require('express')
import {handler330} from "./handler330";
const app = express()
app.get('/330', handler330)
app.listen(3000, () => {})
        