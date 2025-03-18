
const express = require('express')
import {handler6653} from "./handler6653";
const app = express()
app.get('/6653', handler6653)
app.listen(3000, () => {})
        