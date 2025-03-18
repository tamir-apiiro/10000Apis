
const express = require('express')
import {handler6184} from "./handler6184";
const app = express()
app.get('/6184', handler6184)
app.listen(3000, () => {})
        