
const express = require('express')
import {handler6166} from "./handler6166";
const app = express()
app.get('/6166', handler6166)
app.listen(3000, () => {})
        