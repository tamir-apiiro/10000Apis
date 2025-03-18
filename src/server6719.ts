
const express = require('express')
import {handler6719} from "./handler6719";
const app = express()
app.get('/6719', handler6719)
app.listen(3000, () => {})
        