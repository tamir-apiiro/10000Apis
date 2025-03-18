
const express = require('express')
import {handler6819} from "./handler6819";
const app = express()
app.get('/6819', handler6819)
app.listen(3000, () => {})
        