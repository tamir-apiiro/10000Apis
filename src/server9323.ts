
const express = require('express')
import {handler9323} from "./handler9323";
const app = express()
app.get('/9323', handler9323)
app.listen(3000, () => {})
        