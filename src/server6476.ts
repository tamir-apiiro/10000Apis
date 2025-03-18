
const express = require('express')
import {handler6476} from "./handler6476";
const app = express()
app.get('/6476', handler6476)
app.listen(3000, () => {})
        