
const express = require('express')
import {handler6961} from "./handler6961";
const app = express()
app.get('/6961', handler6961)
app.listen(3000, () => {})
        