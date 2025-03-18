
const express = require('express')
import {handler6631} from "./handler6631";
const app = express()
app.get('/6631', handler6631)
app.listen(3000, () => {})
        