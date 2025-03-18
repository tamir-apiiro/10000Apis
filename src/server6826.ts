
const express = require('express')
import {handler6826} from "./handler6826";
const app = express()
app.get('/6826', handler6826)
app.listen(3000, () => {})
        