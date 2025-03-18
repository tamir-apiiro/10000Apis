
const express = require('express')
import {handler6252} from "./handler6252";
const app = express()
app.get('/6252', handler6252)
app.listen(3000, () => {})
        