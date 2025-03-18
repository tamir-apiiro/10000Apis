
const express = require('express')
import {handler6861} from "./handler6861";
const app = express()
app.get('/6861', handler6861)
app.listen(3000, () => {})
        