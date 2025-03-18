
const express = require('express')
import {handler6079} from "./handler6079";
const app = express()
app.get('/6079', handler6079)
app.listen(3000, () => {})
        