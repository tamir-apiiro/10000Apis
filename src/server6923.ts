
const express = require('express')
import {handler6923} from "./handler6923";
const app = express()
app.get('/6923', handler6923)
app.listen(3000, () => {})
        