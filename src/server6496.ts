
const express = require('express')
import {handler6496} from "./handler6496";
const app = express()
app.get('/6496', handler6496)
app.listen(3000, () => {})
        