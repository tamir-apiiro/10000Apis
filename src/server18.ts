
const express = require('express')
import {handler18} from "./handler18";
const app = express()
app.get('/18', handler18)
app.listen(3000, () => {})
        