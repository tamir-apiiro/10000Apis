
const express = require('express')
import {handler9386} from "./handler9386";
const app = express()
app.get('/9386', handler9386)
app.listen(3000, () => {})
        