
const express = require('express')
import {handler3609} from "./handler3609";
const app = express()
app.get('/3609', handler3609)
app.listen(3000, () => {})
        