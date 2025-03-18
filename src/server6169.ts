
const express = require('express')
import {handler6169} from "./handler6169";
const app = express()
app.get('/6169', handler6169)
app.listen(3000, () => {})
        