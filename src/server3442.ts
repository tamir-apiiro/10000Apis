
const express = require('express')
import {handler3442} from "./handler3442";
const app = express()
app.get('/3442', handler3442)
app.listen(3000, () => {})
        