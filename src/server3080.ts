
const express = require('express')
import {handler3080} from "./handler3080";
const app = express()
app.get('/3080', handler3080)
app.listen(3000, () => {})
        