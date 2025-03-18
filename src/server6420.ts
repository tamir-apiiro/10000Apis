
const express = require('express')
import {handler6420} from "./handler6420";
const app = express()
app.get('/6420', handler6420)
app.listen(3000, () => {})
        