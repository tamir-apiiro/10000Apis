
const express = require('express')
import {handler3247} from "./handler3247";
const app = express()
app.get('/3247', handler3247)
app.listen(3000, () => {})
        