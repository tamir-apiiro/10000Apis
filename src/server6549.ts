
const express = require('express')
import {handler6549} from "./handler6549";
const app = express()
app.get('/6549', handler6549)
app.listen(3000, () => {})
        