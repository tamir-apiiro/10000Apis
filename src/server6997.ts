
const express = require('express')
import {handler6997} from "./handler6997";
const app = express()
app.get('/6997', handler6997)
app.listen(3000, () => {})
        