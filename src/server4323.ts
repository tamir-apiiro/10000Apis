
const express = require('express')
import {handler4323} from "./handler4323";
const app = express()
app.get('/4323', handler4323)
app.listen(3000, () => {})
        