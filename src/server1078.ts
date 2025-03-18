
const express = require('express')
import {handler1078} from "./handler1078";
const app = express()
app.get('/1078', handler1078)
app.listen(3000, () => {})
        