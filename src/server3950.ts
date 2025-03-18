
const express = require('express')
import {handler3950} from "./handler3950";
const app = express()
app.get('/3950', handler3950)
app.listen(3000, () => {})
        