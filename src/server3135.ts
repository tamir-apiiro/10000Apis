
const express = require('express')
import {handler3135} from "./handler3135";
const app = express()
app.get('/3135', handler3135)
app.listen(3000, () => {})
        