
const express = require('express')
import {handler6529} from "./handler6529";
const app = express()
app.get('/6529', handler6529)
app.listen(3000, () => {})
        