
const express = require('express')
import {handler9186} from "./handler9186";
const app = express()
app.get('/9186', handler9186)
app.listen(3000, () => {})
        