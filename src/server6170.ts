
const express = require('express')
import {handler6170} from "./handler6170";
const app = express()
app.get('/6170', handler6170)
app.listen(3000, () => {})
        