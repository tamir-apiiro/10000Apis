
const express = require('express')
import {handler5997} from "./handler5997";
const app = express()
app.get('/5997', handler5997)
app.listen(3000, () => {})
        