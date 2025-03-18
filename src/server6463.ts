
const express = require('express')
import {handler6463} from "./handler6463";
const app = express()
app.get('/6463', handler6463)
app.listen(3000, () => {})
        