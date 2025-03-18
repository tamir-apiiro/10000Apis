
const express = require('express')
import {handler6716} from "./handler6716";
const app = express()
app.get('/6716', handler6716)
app.listen(3000, () => {})
        