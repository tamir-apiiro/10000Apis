
const express = require('express')
import {handler3607} from "./handler3607";
const app = express()
app.get('/3607', handler3607)
app.listen(3000, () => {})
        