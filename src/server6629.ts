
const express = require('express')
import {handler6629} from "./handler6629";
const app = express()
app.get('/6629', handler6629)
app.listen(3000, () => {})
        