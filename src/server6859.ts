
const express = require('express')
import {handler6859} from "./handler6859";
const app = express()
app.get('/6859', handler6859)
app.listen(3000, () => {})
        