
const express = require('express')
import {handler6012} from "./handler6012";
const app = express()
app.get('/6012', handler6012)
app.listen(3000, () => {})
        