
const express = require('express')
import {handler3395} from "./handler3395";
const app = express()
app.get('/3395', handler3395)
app.listen(3000, () => {})
        