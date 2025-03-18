
const express = require('express')
import {handler323} from "./handler323";
const app = express()
app.get('/323', handler323)
app.listen(3000, () => {})
        