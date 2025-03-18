
const express = require('express')
import {handler6830} from "./handler6830";
const app = express()
app.get('/6830', handler6830)
app.listen(3000, () => {})
        