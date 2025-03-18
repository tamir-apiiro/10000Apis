
const express = require('express')
import {handler6787} from "./handler6787";
const app = express()
app.get('/6787', handler6787)
app.listen(3000, () => {})
        