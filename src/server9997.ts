
const express = require('express')
import {handler9997} from "./handler9997";
const app = express()
app.get('/9997', handler9997)
app.listen(3000, () => {})
        