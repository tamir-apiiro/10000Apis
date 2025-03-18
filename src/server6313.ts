
const express = require('express')
import {handler6313} from "./handler6313";
const app = express()
app.get('/6313', handler6313)
app.listen(3000, () => {})
        