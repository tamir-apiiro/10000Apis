
const express = require('express')
import {handler2869} from "./handler2869";
const app = express()
app.get('/2869', handler2869)
app.listen(3000, () => {})
        