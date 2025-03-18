
const express = require('express')
import {handler3389} from "./handler3389";
const app = express()
app.get('/3389', handler3389)
app.listen(3000, () => {})
        