
const express = require('express')
import {handler6379} from "./handler6379";
const app = express()
app.get('/6379', handler6379)
app.listen(3000, () => {})
        