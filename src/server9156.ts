
const express = require('express')
import {handler9156} from "./handler9156";
const app = express()
app.get('/9156', handler9156)
app.listen(3000, () => {})
        