
const express = require('express')
import {handler6500} from "./handler6500";
const app = express()
app.get('/6500', handler6500)
app.listen(3000, () => {})
        