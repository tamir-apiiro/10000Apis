
const express = require('express')
import {handler6043} from "./handler6043";
const app = express()
app.get('/6043', handler6043)
app.listen(3000, () => {})
        