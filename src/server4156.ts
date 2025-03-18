
const express = require('express')
import {handler4156} from "./handler4156";
const app = express()
app.get('/4156', handler4156)
app.listen(3000, () => {})
        