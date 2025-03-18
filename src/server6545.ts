
const express = require('express')
import {handler6545} from "./handler6545";
const app = express()
app.get('/6545', handler6545)
app.listen(3000, () => {})
        