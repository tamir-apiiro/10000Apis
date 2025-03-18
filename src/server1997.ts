
const express = require('express')
import {handler1997} from "./handler1997";
const app = express()
app.get('/1997', handler1997)
app.listen(3000, () => {})
        