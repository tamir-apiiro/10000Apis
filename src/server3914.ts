
const express = require('express')
import {handler3914} from "./handler3914";
const app = express()
app.get('/3914', handler3914)
app.listen(3000, () => {})
        