
const express = require('express')
import {handler997} from "./handler997";
const app = express()
app.get('/997', handler997)
app.listen(3000, () => {})
        