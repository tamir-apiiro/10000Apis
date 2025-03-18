
const express = require('express')
import {handler6796} from "./handler6796";
const app = express()
app.get('/6796', handler6796)
app.listen(3000, () => {})
        