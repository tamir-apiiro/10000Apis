
const express = require('express')
import {handler6233} from "./handler6233";
const app = express()
app.get('/6233', handler6233)
app.listen(3000, () => {})
        