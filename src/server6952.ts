
const express = require('express')
import {handler6952} from "./handler6952";
const app = express()
app.get('/6952', handler6952)
app.listen(3000, () => {})
        