
const express = require('express')
import {handler3524} from "./handler3524";
const app = express()
app.get('/3524', handler3524)
app.listen(3000, () => {})
        