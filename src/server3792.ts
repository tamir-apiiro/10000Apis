
const express = require('express')
import {handler3792} from "./handler3792";
const app = express()
app.get('/3792', handler3792)
app.listen(3000, () => {})
        