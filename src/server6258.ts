
const express = require('express')
import {handler6258} from "./handler6258";
const app = express()
app.get('/6258', handler6258)
app.listen(3000, () => {})
        