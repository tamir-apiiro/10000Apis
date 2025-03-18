
const express = require('express')
import {handler6709} from "./handler6709";
const app = express()
app.get('/6709', handler6709)
app.listen(3000, () => {})
        