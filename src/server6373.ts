
const express = require('express')
import {handler6373} from "./handler6373";
const app = express()
app.get('/6373', handler6373)
app.listen(3000, () => {})
        