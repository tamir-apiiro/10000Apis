
const express = require('express')
import {handler6644} from "./handler6644";
const app = express()
app.get('/6644', handler6644)
app.listen(3000, () => {})
        