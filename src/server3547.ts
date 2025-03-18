
const express = require('express')
import {handler3547} from "./handler3547";
const app = express()
app.get('/3547', handler3547)
app.listen(3000, () => {})
        