
const express = require('express')
import {handler106} from "./handler106";
const app = express()
app.get('/106', handler106)
app.listen(3000, () => {})
        