
const express = require('express')
import {handler6452} from "./handler6452";
const app = express()
app.get('/6452', handler6452)
app.listen(3000, () => {})
        