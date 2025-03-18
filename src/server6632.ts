
const express = require('express')
import {handler6632} from "./handler6632";
const app = express()
app.get('/6632', handler6632)
app.listen(3000, () => {})
        