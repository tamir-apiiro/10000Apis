
const express = require('express')
import {handler3417} from "./handler3417";
const app = express()
app.get('/3417', handler3417)
app.listen(3000, () => {})
        