
const express = require('express')
import {handler3346} from "./handler3346";
const app = express()
app.get('/3346', handler3346)
app.listen(3000, () => {})
        