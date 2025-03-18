
const express = require('express')
import {handler3223} from "./handler3223";
const app = express()
app.get('/3223', handler3223)
app.listen(3000, () => {})
        