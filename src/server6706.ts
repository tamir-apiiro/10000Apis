
const express = require('express')
import {handler6706} from "./handler6706";
const app = express()
app.get('/6706', handler6706)
app.listen(3000, () => {})
        