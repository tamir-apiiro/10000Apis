
const express = require('express')
import {handler9084} from "./handler9084";
const app = express()
app.get('/9084', handler9084)
app.listen(3000, () => {})
        