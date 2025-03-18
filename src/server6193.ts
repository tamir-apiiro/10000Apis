
const express = require('express')
import {handler6193} from "./handler6193";
const app = express()
app.get('/6193', handler6193)
app.listen(3000, () => {})
        