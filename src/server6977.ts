
const express = require('express')
import {handler6977} from "./handler6977";
const app = express()
app.get('/6977', handler6977)
app.listen(3000, () => {})
        