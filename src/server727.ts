
const express = require('express')
import {handler727} from "./handler727";
const app = express()
app.get('/727', handler727)
app.listen(3000, () => {})
        