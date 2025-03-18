
const express = require('express')
import {handler2106} from "./handler2106";
const app = express()
app.get('/2106', handler2106)
app.listen(3000, () => {})
        