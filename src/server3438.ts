
const express = require('express')
import {handler3438} from "./handler3438";
const app = express()
app.get('/3438', handler3438)
app.listen(3000, () => {})
        