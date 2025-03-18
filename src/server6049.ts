
const express = require('express')
import {handler6049} from "./handler6049";
const app = express()
app.get('/6049', handler6049)
app.listen(3000, () => {})
        