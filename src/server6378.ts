
const express = require('express')
import {handler6378} from "./handler6378";
const app = express()
app.get('/6378', handler6378)
app.listen(3000, () => {})
        