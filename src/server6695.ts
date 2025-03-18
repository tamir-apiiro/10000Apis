
const express = require('express')
import {handler6695} from "./handler6695";
const app = express()
app.get('/6695', handler6695)
app.listen(3000, () => {})
        