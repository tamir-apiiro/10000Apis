
const express = require('express')
import {handler6005} from "./handler6005";
const app = express()
app.get('/6005', handler6005)
app.listen(3000, () => {})
        