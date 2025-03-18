
const express = require('express')
import {handler6737} from "./handler6737";
const app = express()
app.get('/6737', handler6737)
app.listen(3000, () => {})
        