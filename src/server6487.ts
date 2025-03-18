
const express = require('express')
import {handler6487} from "./handler6487";
const app = express()
app.get('/6487', handler6487)
app.listen(3000, () => {})
        