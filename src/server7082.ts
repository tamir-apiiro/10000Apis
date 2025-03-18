
const express = require('express')
import {handler7082} from "./handler7082";
const app = express()
app.get('/7082', handler7082)
app.listen(3000, () => {})
        