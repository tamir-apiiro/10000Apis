
const express = require('express')
import {handler6017} from "./handler6017";
const app = express()
app.get('/6017', handler6017)
app.listen(3000, () => {})
        