
const express = require('express')
import {handler2323} from "./handler2323";
const app = express()
app.get('/2323', handler2323)
app.listen(3000, () => {})
        