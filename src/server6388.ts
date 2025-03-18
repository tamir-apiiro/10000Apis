
const express = require('express')
import {handler6388} from "./handler6388";
const app = express()
app.get('/6388', handler6388)
app.listen(3000, () => {})
        