
const express = require('express')
import {handler6703} from "./handler6703";
const app = express()
app.get('/6703', handler6703)
app.listen(3000, () => {})
        