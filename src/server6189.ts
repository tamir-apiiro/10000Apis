
const express = require('express')
import {handler6189} from "./handler6189";
const app = express()
app.get('/6189', handler6189)
app.listen(3000, () => {})
        