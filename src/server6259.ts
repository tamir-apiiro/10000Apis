
const express = require('express')
import {handler6259} from "./handler6259";
const app = express()
app.get('/6259', handler6259)
app.listen(3000, () => {})
        