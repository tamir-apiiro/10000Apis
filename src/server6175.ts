
const express = require('express')
import {handler6175} from "./handler6175";
const app = express()
app.get('/6175', handler6175)
app.listen(3000, () => {})
        