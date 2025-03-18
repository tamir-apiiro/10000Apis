
const express = require('express')
import {handler3738} from "./handler3738";
const app = express()
app.get('/3738', handler3738)
app.listen(3000, () => {})
        