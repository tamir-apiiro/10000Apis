
const express = require('express')
import {handler6324} from "./handler6324";
const app = express()
app.get('/6324', handler6324)
app.listen(3000, () => {})
        