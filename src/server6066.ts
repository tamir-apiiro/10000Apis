
const express = require('express')
import {handler6066} from "./handler6066";
const app = express()
app.get('/6066', handler6066)
app.listen(3000, () => {})
        