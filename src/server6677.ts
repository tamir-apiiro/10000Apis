
const express = require('express')
import {handler6677} from "./handler6677";
const app = express()
app.get('/6677', handler6677)
app.listen(3000, () => {})
        