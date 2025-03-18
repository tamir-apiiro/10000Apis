
const express = require('express')
import {handler7792} from "./handler7792";
const app = express()
app.get('/7792', handler7792)
app.listen(3000, () => {})
        