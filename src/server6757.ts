
const express = require('express')
import {handler6757} from "./handler6757";
const app = express()
app.get('/6757', handler6757)
app.listen(3000, () => {})
        