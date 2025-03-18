
const express = require('express')
import {handler6139} from "./handler6139";
const app = express()
app.get('/6139', handler6139)
app.listen(3000, () => {})
        