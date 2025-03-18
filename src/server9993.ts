
const express = require('express')
import {handler9993} from "./handler9993";
const app = express()
app.get('/9993', handler9993)
app.listen(3000, () => {})
        