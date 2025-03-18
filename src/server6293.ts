
const express = require('express')
import {handler6293} from "./handler6293";
const app = express()
app.get('/6293', handler6293)
app.listen(3000, () => {})
        