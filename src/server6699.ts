
const express = require('express')
import {handler6699} from "./handler6699";
const app = express()
app.get('/6699', handler6699)
app.listen(3000, () => {})
        