
const express = require('express')
import {handler6187} from "./handler6187";
const app = express()
app.get('/6187', handler6187)
app.listen(3000, () => {})
        