
const express = require('express')
import {handler6478} from "./handler6478";
const app = express()
app.get('/6478', handler6478)
app.listen(3000, () => {})
        