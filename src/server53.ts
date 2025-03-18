
const express = require('express')
import {handler53} from "./handler53";
const app = express()
app.get('/53', handler53)
app.listen(3000, () => {})
        