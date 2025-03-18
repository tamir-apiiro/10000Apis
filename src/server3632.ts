
const express = require('express')
import {handler3632} from "./handler3632";
const app = express()
app.get('/3632', handler3632)
app.listen(3000, () => {})
        