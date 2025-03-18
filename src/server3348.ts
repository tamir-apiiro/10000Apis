
const express = require('express')
import {handler3348} from "./handler3348";
const app = express()
app.get('/3348', handler3348)
app.listen(3000, () => {})
        