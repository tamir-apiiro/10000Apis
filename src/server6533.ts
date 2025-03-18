
const express = require('express')
import {handler6533} from "./handler6533";
const app = express()
app.get('/6533', handler6533)
app.listen(3000, () => {})
        