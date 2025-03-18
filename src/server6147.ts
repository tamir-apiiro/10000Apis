
const express = require('express')
import {handler6147} from "./handler6147";
const app = express()
app.get('/6147', handler6147)
app.listen(3000, () => {})
        