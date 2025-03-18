
const express = require('express')
import {handler6230} from "./handler6230";
const app = express()
app.get('/6230', handler6230)
app.listen(3000, () => {})
        