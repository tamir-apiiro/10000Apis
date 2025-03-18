
const express = require('express')
import {handler6687} from "./handler6687";
const app = express()
app.get('/6687', handler6687)
app.listen(3000, () => {})
        