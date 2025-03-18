
const express = require('express')
import {handler2400} from "./handler2400";
const app = express()
app.get('/2400', handler2400)
app.listen(3000, () => {})
        