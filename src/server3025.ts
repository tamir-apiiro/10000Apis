
const express = require('express')
import {handler3025} from "./handler3025";
const app = express()
app.get('/3025', handler3025)
app.listen(3000, () => {})
        