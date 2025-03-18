
const express = require('express')
import {handler3853} from "./handler3853";
const app = express()
app.get('/3853', handler3853)
app.listen(3000, () => {})
        