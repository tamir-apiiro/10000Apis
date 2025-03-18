
const express = require('express')
import {handler6704} from "./handler6704";
const app = express()
app.get('/6704', handler6704)
app.listen(3000, () => {})
        