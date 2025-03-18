
const express = require('express')
import {handler6613} from "./handler6613";
const app = express()
app.get('/6613', handler6613)
app.listen(3000, () => {})
        