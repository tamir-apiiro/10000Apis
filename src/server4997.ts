
const express = require('express')
import {handler4997} from "./handler4997";
const app = express()
app.get('/4997', handler4997)
app.listen(3000, () => {})
        