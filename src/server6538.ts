
const express = require('express')
import {handler6538} from "./handler6538";
const app = express()
app.get('/6538', handler6538)
app.listen(3000, () => {})
        