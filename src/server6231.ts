
const express = require('express')
import {handler6231} from "./handler6231";
const app = express()
app.get('/6231', handler6231)
app.listen(3000, () => {})
        