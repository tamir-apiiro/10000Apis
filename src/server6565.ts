
const express = require('express')
import {handler6565} from "./handler6565";
const app = express()
app.get('/6565', handler6565)
app.listen(3000, () => {})
        