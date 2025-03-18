
const express = require('express')
import {handler6265} from "./handler6265";
const app = express()
app.get('/6265', handler6265)
app.listen(3000, () => {})
        