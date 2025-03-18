
const express = require('express')
import {handler6505} from "./handler6505";
const app = express()
app.get('/6505', handler6505)
app.listen(3000, () => {})
        