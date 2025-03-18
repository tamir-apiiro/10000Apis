
const express = require('express')
import {handler6733} from "./handler6733";
const app = express()
app.get('/6733', handler6733)
app.listen(3000, () => {})
        