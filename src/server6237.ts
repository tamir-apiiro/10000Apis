
const express = require('express')
import {handler6237} from "./handler6237";
const app = express()
app.get('/6237', handler6237)
app.listen(3000, () => {})
        