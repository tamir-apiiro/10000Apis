
const express = require('express')
import {handler6020} from "./handler6020";
const app = express()
app.get('/6020', handler6020)
app.listen(3000, () => {})
        