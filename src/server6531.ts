
const express = require('express')
import {handler6531} from "./handler6531";
const app = express()
app.get('/6531', handler6531)
app.listen(3000, () => {})
        