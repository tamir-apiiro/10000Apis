
const express = require('express')
import {handler6671} from "./handler6671";
const app = express()
app.get('/6671', handler6671)
app.listen(3000, () => {})
        