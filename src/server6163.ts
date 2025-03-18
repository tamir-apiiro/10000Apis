
const express = require('express')
import {handler6163} from "./handler6163";
const app = express()
app.get('/6163', handler6163)
app.listen(3000, () => {})
        