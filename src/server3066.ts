
const express = require('express')
import {handler3066} from "./handler3066";
const app = express()
app.get('/3066', handler3066)
app.listen(3000, () => {})
        