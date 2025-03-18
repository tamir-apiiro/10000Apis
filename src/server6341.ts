
const express = require('express')
import {handler6341} from "./handler6341";
const app = express()
app.get('/6341', handler6341)
app.listen(3000, () => {})
        