
const express = require('express')
import {handler7909} from "./handler7909";
const app = express()
app.get('/7909', handler7909)
app.listen(3000, () => {})
        