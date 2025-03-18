
const express = require('express')
import {handler6879} from "./handler6879";
const app = express()
app.get('/6879', handler6879)
app.listen(3000, () => {})
        