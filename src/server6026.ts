
const express = require('express')
import {handler6026} from "./handler6026";
const app = express()
app.get('/6026', handler6026)
app.listen(3000, () => {})
        