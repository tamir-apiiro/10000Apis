
const express = require('express')
import {handler9610} from "./handler9610";
const app = express()
app.get('/9610', handler9610)
app.listen(3000, () => {})
        