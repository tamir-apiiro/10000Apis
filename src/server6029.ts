
const express = require('express')
import {handler6029} from "./handler6029";
const app = express()
app.get('/6029', handler6029)
app.listen(3000, () => {})
        