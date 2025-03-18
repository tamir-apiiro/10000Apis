
const express = require('express')
import {handler7738} from "./handler7738";
const app = express()
app.get('/7738', handler7738)
app.listen(3000, () => {})
        