
const express = require('express')
import {handler1531} from "./handler1531";
const app = express()
app.get('/1531', handler1531)
app.listen(3000, () => {})
        