
const express = require('express')
import {handler3909} from "./handler3909";
const app = express()
app.get('/3909', handler3909)
app.listen(3000, () => {})
        