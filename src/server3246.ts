
const express = require('express')
import {handler3246} from "./handler3246";
const app = express()
app.get('/3246', handler3246)
app.listen(3000, () => {})
        