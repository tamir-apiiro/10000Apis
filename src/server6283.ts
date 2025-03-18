
const express = require('express')
import {handler6283} from "./handler6283";
const app = express()
app.get('/6283', handler6283)
app.listen(3000, () => {})
        