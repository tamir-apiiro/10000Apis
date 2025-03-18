
const express = require('express')
import {handler1323} from "./handler1323";
const app = express()
app.get('/1323', handler1323)
app.listen(3000, () => {})
        