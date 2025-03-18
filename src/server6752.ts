
const express = require('express')
import {handler6752} from "./handler6752";
const app = express()
app.get('/6752', handler6752)
app.listen(3000, () => {})
        