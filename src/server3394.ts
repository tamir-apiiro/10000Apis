
const express = require('express')
import {handler3394} from "./handler3394";
const app = express()
app.get('/3394', handler3394)
app.listen(3000, () => {})
        