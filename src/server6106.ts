
const express = require('express')
import {handler6106} from "./handler6106";
const app = express()
app.get('/6106', handler6106)
app.listen(3000, () => {})
        