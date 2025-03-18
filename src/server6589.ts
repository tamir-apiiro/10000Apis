
const express = require('express')
import {handler6589} from "./handler6589";
const app = express()
app.get('/6589', handler6589)
app.listen(3000, () => {})
        