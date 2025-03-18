
const express = require('express')
import {handler6984} from "./handler6984";
const app = express()
app.get('/6984', handler6984)
app.listen(3000, () => {})
        