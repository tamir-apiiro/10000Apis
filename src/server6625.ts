
const express = require('express')
import {handler6625} from "./handler6625";
const app = express()
app.get('/6625', handler6625)
app.listen(3000, () => {})
        