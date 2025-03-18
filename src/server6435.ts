
const express = require('express')
import {handler6435} from "./handler6435";
const app = express()
app.get('/6435', handler6435)
app.listen(3000, () => {})
        