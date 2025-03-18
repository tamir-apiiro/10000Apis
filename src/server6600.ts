
const express = require('express')
import {handler6600} from "./handler6600";
const app = express()
app.get('/6600', handler6600)
app.listen(3000, () => {})
        