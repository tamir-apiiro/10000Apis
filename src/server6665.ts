
const express = require('express')
import {handler6665} from "./handler6665";
const app = express()
app.get('/6665', handler6665)
app.listen(3000, () => {})
        