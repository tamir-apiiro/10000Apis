
const express = require('express')
import {handler9846} from "./handler9846";
const app = express()
app.get('/9846', handler9846)
app.listen(3000, () => {})
        