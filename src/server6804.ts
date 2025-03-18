
const express = require('express')
import {handler6804} from "./handler6804";
const app = express()
app.get('/6804', handler6804)
app.listen(3000, () => {})
        