
const express = require('express')
import {handler6489} from "./handler6489";
const app = express()
app.get('/6489', handler6489)
app.listen(3000, () => {})
        