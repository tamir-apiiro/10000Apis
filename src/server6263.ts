
const express = require('express')
import {handler6263} from "./handler6263";
const app = express()
app.get('/6263', handler6263)
app.listen(3000, () => {})
        