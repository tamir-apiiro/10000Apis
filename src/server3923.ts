
const express = require('express')
import {handler3923} from "./handler3923";
const app = express()
app.get('/3923', handler3923)
app.listen(3000, () => {})
        