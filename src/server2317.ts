
const express = require('express')
import {handler2317} from "./handler2317";
const app = express()
app.get('/2317', handler2317)
app.listen(3000, () => {})
        