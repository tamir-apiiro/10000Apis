
const express = require('express')
import {handler6863} from "./handler6863";
const app = express()
app.get('/6863', handler6863)
app.listen(3000, () => {})
        