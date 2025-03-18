
const express = require('express')
import {handler6588} from "./handler6588";
const app = express()
app.get('/6588', handler6588)
app.listen(3000, () => {})
        