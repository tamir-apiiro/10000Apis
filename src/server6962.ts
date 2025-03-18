
const express = require('express')
import {handler6962} from "./handler6962";
const app = express()
app.get('/6962', handler6962)
app.listen(3000, () => {})
        