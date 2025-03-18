
const express = require('express')
import {handler6323} from "./handler6323";
const app = express()
app.get('/6323', handler6323)
app.listen(3000, () => {})
        