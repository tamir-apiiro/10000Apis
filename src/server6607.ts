
const express = require('express')
import {handler6607} from "./handler6607";
const app = express()
app.get('/6607', handler6607)
app.listen(3000, () => {})
        