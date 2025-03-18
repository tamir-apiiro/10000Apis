
const express = require('express')
import {handler738} from "./handler738";
const app = express()
app.get('/738', handler738)
app.listen(3000, () => {})
        