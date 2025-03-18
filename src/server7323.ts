
const express = require('express')
import {handler7323} from "./handler7323";
const app = express()
app.get('/7323', handler7323)
app.listen(3000, () => {})
        