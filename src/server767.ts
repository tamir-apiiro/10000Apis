
const express = require('express')
import {handler767} from "./handler767";
const app = express()
app.get('/767', handler767)
app.listen(3000, () => {})
        