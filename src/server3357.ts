
const express = require('express')
import {handler3357} from "./handler3357";
const app = express()
app.get('/3357', handler3357)
app.listen(3000, () => {})
        