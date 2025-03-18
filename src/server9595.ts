
const express = require('express')
import {handler9595} from "./handler9595";
const app = express()
app.get('/9595', handler9595)
app.listen(3000, () => {})
        