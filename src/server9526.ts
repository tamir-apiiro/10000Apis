
const express = require('express')
import {handler9526} from "./handler9526";
const app = express()
app.get('/9526', handler9526)
app.listen(3000, () => {})
        