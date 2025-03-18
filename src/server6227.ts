
const express = require('express')
import {handler6227} from "./handler6227";
const app = express()
app.get('/6227', handler6227)
app.listen(3000, () => {})
        