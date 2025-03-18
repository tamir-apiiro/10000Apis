
const express = require('express')
import {handler6897} from "./handler6897";
const app = express()
app.get('/6897', handler6897)
app.listen(3000, () => {})
        