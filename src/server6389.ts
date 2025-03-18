
const express = require('express')
import {handler6389} from "./handler6389";
const app = express()
app.get('/6389', handler6389)
app.listen(3000, () => {})
        