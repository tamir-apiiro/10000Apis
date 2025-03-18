
const express = require('express')
import {handler6557} from "./handler6557";
const app = express()
app.get('/6557', handler6557)
app.listen(3000, () => {})
        