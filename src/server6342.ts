
const express = require('express')
import {handler6342} from "./handler6342";
const app = express()
app.get('/6342', handler6342)
app.listen(3000, () => {})
        