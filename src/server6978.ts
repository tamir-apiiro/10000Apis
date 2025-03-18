
const express = require('express')
import {handler6978} from "./handler6978";
const app = express()
app.get('/6978', handler6978)
app.listen(3000, () => {})
        