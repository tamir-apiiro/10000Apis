
const express = require('express')
import {handler3997} from "./handler3997";
const app = express()
app.get('/3997', handler3997)
app.listen(3000, () => {})
        