
const express = require('express')
import {handler6658} from "./handler6658";
const app = express()
app.get('/6658', handler6658)
app.listen(3000, () => {})
        