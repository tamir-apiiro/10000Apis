
const express = require('express')
import {handler6552} from "./handler6552";
const app = express()
app.get('/6552', handler6552)
app.listen(3000, () => {})
        