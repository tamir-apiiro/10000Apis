
const express = require('express')
import {handler3564} from "./handler3564";
const app = express()
app.get('/3564', handler3564)
app.listen(3000, () => {})
        