
const express = require('express')
import {handler6455} from "./handler6455";
const app = express()
app.get('/6455', handler6455)
app.listen(3000, () => {})
        