
const express = require('express')
import {handler3414} from "./handler3414";
const app = express()
app.get('/3414', handler3414)
app.listen(3000, () => {})
        