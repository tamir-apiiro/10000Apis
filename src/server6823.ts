
const express = require('express')
import {handler6823} from "./handler6823";
const app = express()
app.get('/6823', handler6823)
app.listen(3000, () => {})
        