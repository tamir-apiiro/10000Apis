
const express = require('express')
import {handler3993} from "./handler3993";
const app = express()
app.get('/3993', handler3993)
app.listen(3000, () => {})
        