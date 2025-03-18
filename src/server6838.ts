
const express = require('express')
import {handler6838} from "./handler6838";
const app = express()
app.get('/6838', handler6838)
app.listen(3000, () => {})
        