
const express = require('express')
import {handler6510} from "./handler6510";
const app = express()
app.get('/6510', handler6510)
app.listen(3000, () => {})
        