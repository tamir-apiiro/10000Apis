
const express = require('express')
import {handler6376} from "./handler6376";
const app = express()
app.get('/6376', handler6376)
app.listen(3000, () => {})
        