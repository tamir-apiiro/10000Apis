
const express = require('express')
import {handler6916} from "./handler6916";
const app = express()
app.get('/6916', handler6916)
app.listen(3000, () => {})
        