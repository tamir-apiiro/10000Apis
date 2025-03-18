
const express = require('express')
import {handler6914} from "./handler6914";
const app = express()
app.get('/6914', handler6914)
app.listen(3000, () => {})
        