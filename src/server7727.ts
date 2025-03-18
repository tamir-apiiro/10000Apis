
const express = require('express')
import {handler7727} from "./handler7727";
const app = express()
app.get('/7727', handler7727)
app.listen(3000, () => {})
        