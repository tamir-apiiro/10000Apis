
const express = require('express')
import {handler6575} from "./handler6575";
const app = express()
app.get('/6575', handler6575)
app.listen(3000, () => {})
        