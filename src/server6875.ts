
const express = require('express')
import {handler6875} from "./handler6875";
const app = express()
app.get('/6875', handler6875)
app.listen(3000, () => {})
        