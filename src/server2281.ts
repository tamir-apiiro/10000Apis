
const express = require('express')
import {handler2281} from "./handler2281";
const app = express()
app.get('/2281', handler2281)
app.listen(3000, () => {})
        