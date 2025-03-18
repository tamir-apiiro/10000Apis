
const express = require('express')
import {handler8323} from "./handler8323";
const app = express()
app.get('/8323', handler8323)
app.listen(3000, () => {})
        