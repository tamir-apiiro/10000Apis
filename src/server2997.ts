
const express = require('express')
import {handler2997} from "./handler2997";
const app = express()
app.get('/2997', handler2997)
app.listen(3000, () => {})
        