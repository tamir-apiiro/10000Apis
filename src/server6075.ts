
const express = require('express')
import {handler6075} from "./handler6075";
const app = express()
app.get('/6075', handler6075)
app.listen(3000, () => {})
        