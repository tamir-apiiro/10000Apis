
const express = require('express')
import {handler6459} from "./handler6459";
const app = express()
app.get('/6459', handler6459)
app.listen(3000, () => {})
        