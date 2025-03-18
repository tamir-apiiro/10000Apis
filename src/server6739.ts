
const express = require('express')
import {handler6739} from "./handler6739";
const app = express()
app.get('/6739', handler6739)
app.listen(3000, () => {})
        