
const express = require('express')
import {handler6442} from "./handler6442";
const app = express()
app.get('/6442', handler6442)
app.listen(3000, () => {})
        