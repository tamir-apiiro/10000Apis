
const express = require('express')
import {handler6447} from "./handler6447";
const app = express()
app.get('/6447', handler6447)
app.listen(3000, () => {})
        