
const express = require('express')
import {handler6634} from "./handler6634";
const app = express()
app.get('/6634', handler6634)
app.listen(3000, () => {})
        