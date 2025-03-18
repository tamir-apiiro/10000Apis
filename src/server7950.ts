
const express = require('express')
import {handler7950} from "./handler7950";
const app = express()
app.get('/7950', handler7950)
app.listen(3000, () => {})
        