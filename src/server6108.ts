
const express = require('express')
import {handler6108} from "./handler6108";
const app = express()
app.get('/6108', handler6108)
app.listen(3000, () => {})
        