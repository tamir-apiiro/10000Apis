
const express = require('express')
import {handler6581} from "./handler6581";
const app = express()
app.get('/6581', handler6581)
app.listen(3000, () => {})
        