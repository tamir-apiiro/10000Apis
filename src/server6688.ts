
const express = require('express')
import {handler6688} from "./handler6688";
const app = express()
app.get('/6688', handler6688)
app.listen(3000, () => {})
        