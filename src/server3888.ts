
const express = require('express')
import {handler3888} from "./handler3888";
const app = express()
app.get('/3888', handler3888)
app.listen(3000, () => {})
        