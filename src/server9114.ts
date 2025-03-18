
const express = require('express')
import {handler9114} from "./handler9114";
const app = express()
app.get('/9114', handler9114)
app.listen(3000, () => {})
        