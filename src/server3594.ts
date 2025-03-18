
const express = require('express')
import {handler3594} from "./handler3594";
const app = express()
app.get('/3594', handler3594)
app.listen(3000, () => {})
        