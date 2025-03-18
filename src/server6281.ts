
const express = require('express')
import {handler6281} from "./handler6281";
const app = express()
app.get('/6281', handler6281)
app.listen(3000, () => {})
        