
const express = require('express')
import {handler9531} from "./handler9531";
const app = express()
app.get('/9531', handler9531)
app.listen(3000, () => {})
        