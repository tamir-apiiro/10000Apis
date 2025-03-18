
const express = require('express')
import {handler4976} from "./handler4976";
const app = express()
app.get('/4976', handler4976)
app.listen(3000, () => {})
        