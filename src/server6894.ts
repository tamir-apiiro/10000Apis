
const express = require('express')
import {handler6894} from "./handler6894";
const app = express()
app.get('/6894', handler6894)
app.listen(3000, () => {})
        