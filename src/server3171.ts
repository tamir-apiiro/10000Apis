
const express = require('express')
import {handler3171} from "./handler3171";
const app = express()
app.get('/3171', handler3171)
app.listen(3000, () => {})
        