
const express = require('express')
import {handler6286} from "./handler6286";
const app = express()
app.get('/6286', handler6286)
app.listen(3000, () => {})
        