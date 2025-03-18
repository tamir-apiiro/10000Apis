
const express = require('express')
import {handler6868} from "./handler6868";
const app = express()
app.get('/6868', handler6868)
app.listen(3000, () => {})
        