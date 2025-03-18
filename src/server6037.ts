
const express = require('express')
import {handler6037} from "./handler6037";
const app = express()
app.get('/6037', handler6037)
app.listen(3000, () => {})
        