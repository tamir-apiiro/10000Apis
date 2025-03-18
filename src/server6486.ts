
const express = require('express')
import {handler6486} from "./handler6486";
const app = express()
app.get('/6486', handler6486)
app.listen(3000, () => {})
        