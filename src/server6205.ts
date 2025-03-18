
const express = require('express')
import {handler6205} from "./handler6205";
const app = express()
app.get('/6205', handler6205)
app.listen(3000, () => {})
        