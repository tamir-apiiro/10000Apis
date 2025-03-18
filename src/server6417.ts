
const express = require('express')
import {handler6417} from "./handler6417";
const app = express()
app.get('/6417', handler6417)
app.listen(3000, () => {})
        