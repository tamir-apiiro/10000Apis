
const express = require('express')
import {handler607} from "./handler607";
const app = express()
app.get('/607', handler607)
app.listen(3000, () => {})
        