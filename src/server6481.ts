
const express = require('express')
import {handler6481} from "./handler6481";
const app = express()
app.get('/6481', handler6481)
app.listen(3000, () => {})
        