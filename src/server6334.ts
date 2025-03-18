
const express = require('express')
import {handler6334} from "./handler6334";
const app = express()
app.get('/6334', handler6334)
app.listen(3000, () => {})
        