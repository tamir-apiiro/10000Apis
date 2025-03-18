
const express = require('express')
import {handler9848} from "./handler9848";
const app = express()
app.get('/9848', handler9848)
app.listen(3000, () => {})
        