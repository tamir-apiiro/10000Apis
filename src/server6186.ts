
const express = require('express')
import {handler6186} from "./handler6186";
const app = express()
app.get('/6186', handler6186)
app.listen(3000, () => {})
        