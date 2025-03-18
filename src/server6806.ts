
const express = require('express')
import {handler6806} from "./handler6806";
const app = express()
app.get('/6806', handler6806)
app.listen(3000, () => {})
        