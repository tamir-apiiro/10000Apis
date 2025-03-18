
const express = require('express')
import {handler156} from "./handler156";
const app = express()
app.get('/156', handler156)
app.listen(3000, () => {})
        