
const express = require('express')
import {handler3156} from "./handler3156";
const app = express()
app.get('/3156', handler3156)
app.listen(3000, () => {})
        