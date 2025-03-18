
const express = require('express')
import {handler6873} from "./handler6873";
const app = express()
app.get('/6873', handler6873)
app.listen(3000, () => {})
        