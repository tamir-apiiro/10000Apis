
const express = require('express')
import {handler5323} from "./handler5323";
const app = express()
app.get('/5323', handler5323)
app.listen(3000, () => {})
        