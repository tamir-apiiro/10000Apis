
const express = require('express')
import {handler9102} from "./handler9102";
const app = express()
app.get('/9102', handler9102)
app.listen(3000, () => {})
        