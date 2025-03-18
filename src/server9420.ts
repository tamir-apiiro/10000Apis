
const express = require('express')
import {handler9420} from "./handler9420";
const app = express()
app.get('/9420', handler9420)
app.listen(3000, () => {})
        