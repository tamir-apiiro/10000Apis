
const express = require('express')
import {handler6328} from "./handler6328";
const app = express()
app.get('/6328', handler6328)
app.listen(3000, () => {})
        