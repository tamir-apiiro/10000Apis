
const express = require('express')
import {handler6635} from "./handler6635";
const app = express()
app.get('/6635', handler6635)
app.listen(3000, () => {})
        