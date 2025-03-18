
const express = require('express')
import {handler6181} from "./handler6181";
const app = express()
app.get('/6181', handler6181)
app.listen(3000, () => {})
        