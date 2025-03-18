
const express = require('express')
import {handler9760} from "./handler9760";
const app = express()
app.get('/9760', handler9760)
app.listen(3000, () => {})
        