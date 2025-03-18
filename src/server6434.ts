
const express = require('express')
import {handler6434} from "./handler6434";
const app = express()
app.get('/6434', handler6434)
app.listen(3000, () => {})
        