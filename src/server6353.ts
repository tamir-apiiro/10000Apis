
const express = require('express')
import {handler6353} from "./handler6353";
const app = express()
app.get('/6353', handler6353)
app.listen(3000, () => {})
        