
const express = require('express')
import {handler3713} from "./handler3713";
const app = express()
app.get('/3713', handler3713)
app.listen(3000, () => {})
        