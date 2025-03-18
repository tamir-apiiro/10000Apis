
const express = require('express')
import {handler6503} from "./handler6503";
const app = express()
app.get('/6503', handler6503)
app.listen(3000, () => {})
        