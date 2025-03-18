
const express = require('express')
import {handler3261} from "./handler3261";
const app = express()
app.get('/3261', handler3261)
app.listen(3000, () => {})
        