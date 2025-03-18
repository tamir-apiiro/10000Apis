
const express = require('express')
import {handler9080} from "./handler9080";
const app = express()
app.get('/9080', handler9080)
app.listen(3000, () => {})
        