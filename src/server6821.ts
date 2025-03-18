
const express = require('express')
import {handler6821} from "./handler6821";
const app = express()
app.get('/6821', handler6821)
app.listen(3000, () => {})
        