
const express = require('express')
import {handler7997} from "./handler7997";
const app = express()
app.get('/7997', handler7997)
app.listen(3000, () => {})
        