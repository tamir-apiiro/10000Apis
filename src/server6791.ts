
const express = require('express')
import {handler6791} from "./handler6791";
const app = express()
app.get('/6791', handler6791)
app.listen(3000, () => {})
        