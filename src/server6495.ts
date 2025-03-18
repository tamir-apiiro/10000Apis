
const express = require('express')
import {handler6495} from "./handler6495";
const app = express()
app.get('/6495', handler6495)
app.listen(3000, () => {})
        