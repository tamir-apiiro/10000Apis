
const express = require('express')
import {handler3988} from "./handler3988";
const app = express()
app.get('/3988', handler3988)
app.listen(3000, () => {})
        