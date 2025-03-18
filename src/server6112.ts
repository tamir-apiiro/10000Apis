
const express = require('express')
import {handler6112} from "./handler6112";
const app = express()
app.get('/6112', handler6112)
app.listen(3000, () => {})
        