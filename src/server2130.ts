
const express = require('express')
import {handler2130} from "./handler2130";
const app = express()
app.get('/2130', handler2130)
app.listen(3000, () => {})
        