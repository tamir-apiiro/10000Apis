
const express = require('express')
import {handler3499} from "./handler3499";
const app = express()
app.get('/3499', handler3499)
app.listen(3000, () => {})
        