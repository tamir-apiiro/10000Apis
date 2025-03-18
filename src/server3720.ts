
const express = require('express')
import {handler3720} from "./handler3720";
const app = express()
app.get('/3720', handler3720)
app.listen(3000, () => {})
        