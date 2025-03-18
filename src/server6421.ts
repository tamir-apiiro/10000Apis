
const express = require('express')
import {handler6421} from "./handler6421";
const app = express()
app.get('/6421', handler6421)
app.listen(3000, () => {})
        