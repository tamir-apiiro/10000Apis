
const express = require('express')
import {handler3895} from "./handler3895";
const app = express()
app.get('/3895', handler3895)
app.listen(3000, () => {})
        