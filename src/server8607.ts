
const express = require('express')
import {handler8607} from "./handler8607";
const app = express()
app.get('/8607', handler8607)
app.listen(3000, () => {})
        