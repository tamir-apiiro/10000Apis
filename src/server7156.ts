
const express = require('express')
import {handler7156} from "./handler7156";
const app = express()
app.get('/7156', handler7156)
app.listen(3000, () => {})
        