
const express = require('express')
import {handler6034} from "./handler6034";
const app = express()
app.get('/6034', handler6034)
app.listen(3000, () => {})
        