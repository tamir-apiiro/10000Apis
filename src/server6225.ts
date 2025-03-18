
const express = require('express')
import {handler6225} from "./handler6225";
const app = express()
app.get('/6225', handler6225)
app.listen(3000, () => {})
        