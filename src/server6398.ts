
const express = require('express')
import {handler6398} from "./handler6398";
const app = express()
app.get('/6398', handler6398)
app.listen(3000, () => {})
        