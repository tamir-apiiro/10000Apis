
const express = require('express')
import {handler6133} from "./handler6133";
const app = express()
app.get('/6133', handler6133)
app.listen(3000, () => {})
        