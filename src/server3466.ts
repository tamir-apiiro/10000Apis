
const express = require('express')
import {handler3466} from "./handler3466";
const app = express()
app.get('/3466', handler3466)
app.listen(3000, () => {})
        