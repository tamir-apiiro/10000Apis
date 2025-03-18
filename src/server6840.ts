
const express = require('express')
import {handler6840} from "./handler6840";
const app = express()
app.get('/6840', handler6840)
app.listen(3000, () => {})
        