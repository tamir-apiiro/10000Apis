
const express = require('express')
import {handler6090} from "./handler6090";
const app = express()
app.get('/6090', handler6090)
app.listen(3000, () => {})
        