
const express = require('express')
import {handler6083} from "./handler6083";
const app = express()
app.get('/6083', handler6083)
app.listen(3000, () => {})
        