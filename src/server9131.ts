
const express = require('express')
import {handler9131} from "./handler9131";
const app = express()
app.get('/9131', handler9131)
app.listen(3000, () => {})
        