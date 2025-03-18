
const express = require('express')
import {handler8997} from "./handler8997";
const app = express()
app.get('/8997', handler8997)
app.listen(3000, () => {})
        