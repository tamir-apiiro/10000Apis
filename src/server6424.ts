
const express = require('express')
import {handler6424} from "./handler6424";
const app = express()
app.get('/6424', handler6424)
app.listen(3000, () => {})
        