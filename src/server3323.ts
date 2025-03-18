
const express = require('express')
import {handler3323} from "./handler3323";
const app = express()
app.get('/3323', handler3323)
app.listen(3000, () => {})
        