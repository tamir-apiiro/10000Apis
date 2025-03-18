
const express = require('express')
import {handler6654} from "./handler6654";
const app = express()
app.get('/6654', handler6654)
app.listen(3000, () => {})
        