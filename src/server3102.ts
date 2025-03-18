
const express = require('express')
import {handler3102} from "./handler3102";
const app = express()
app.get('/3102', handler3102)
app.listen(3000, () => {})
        