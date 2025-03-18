
const express = require('express')
import {handler6555} from "./handler6555";
const app = express()
app.get('/6555', handler6555)
app.listen(3000, () => {})
        