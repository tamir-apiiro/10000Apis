
const express = require('express')
import {handler9157} from "./handler9157";
const app = express()
app.get('/9157', handler9157)
app.listen(3000, () => {})
        