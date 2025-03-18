
const express = require('express')
import {handler9683} from "./handler9683";
const app = express()
app.get('/9683', handler9683)
app.listen(3000, () => {})
        