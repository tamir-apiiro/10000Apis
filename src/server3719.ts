
const express = require('express')
import {handler3719} from "./handler3719";
const app = express()
app.get('/3719', handler3719)
app.listen(3000, () => {})
        