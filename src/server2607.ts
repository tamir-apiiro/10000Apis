
const express = require('express')
import {handler2607} from "./handler2607";
const app = express()
app.get('/2607', handler2607)
app.listen(3000, () => {})
        