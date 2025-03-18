
const express = require('express')
import {handler3584} from "./handler3584";
const app = express()
app.get('/3584', handler3584)
app.listen(3000, () => {})
        