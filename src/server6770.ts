
const express = require('express')
import {handler6770} from "./handler6770";
const app = express()
app.get('/6770', handler6770)
app.listen(3000, () => {})
        