
const express = require('express')
import {handler6969} from "./handler6969";
const app = express()
app.get('/6969', handler6969)
app.listen(3000, () => {})
        