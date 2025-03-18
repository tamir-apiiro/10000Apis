
const express = require('express')
import {handler6097} from "./handler6097";
const app = express()
app.get('/6097', handler6097)
app.listen(3000, () => {})
        